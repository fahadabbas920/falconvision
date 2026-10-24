import type { APIRoute } from 'astro';
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from 'astro:env/server';
import { EMAIL_PATTERN, LIMITS } from '../../data/contact';

export const prerender = false;

const EMAIL_RE = new RegExp(`^${EMAIL_PATTERN}$`);

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);

export const POST: APIRoute = async ({ request, redirect }) => {
  // Forms posted without JS get a redirect back to the page; fetch() callers get JSON.
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  const respond = (ok: boolean, status: number, error?: string) =>
    wantsJson ? Response.json(ok ? { ok } : { ok, error }, { status }) : redirect(`/?sent=${ok ? 1 : 0}#contact`, 303);

  const form = await request.formData().catch(() => null);
  if (!form) return respond(false, 400, 'Invalid form submission.');

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (String(form.get('website') ?? '').trim()) return respond(true, 200);

  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  // Mirrors the browser checks, which can be bypassed by posting to this endpoint directly.
  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    return respond(false, 400, `Please enter your name (${LIMITS.name.min}–${LIMITS.name.max} characters).`);
  }
  if (email.length > LIMITS.email.max || !EMAIL_RE.test(email)) {
    return respond(false, 400, 'Please enter a valid email address, e.g. you@company.com.');
  }
  if (message.length < LIMITS.message.min || message.length > LIMITS.message.max) {
    return respond(
      false,
      400,
      `Please enter a message between ${LIMITS.message.min} and ${LIMITS.message.max.toLocaleString('en-US')} characters.`,
    );
  }

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.');
    return respond(false, 500, 'The contact form is not set up yet. Please email us directly.');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL.split(',').map((s) => s.trim()),
      reply_to: email,
      subject: `New website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return respond(false, 502, 'Sorry, your message could not be sent. Please try again or email us directly.');
  }

  return respond(true, 200);
};
