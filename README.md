# Falcon Vision Engineering — Website

Marketing site for Falcon Vision Engineering LLC (rebar detailing, BBS, shop drawings, estimation).
Built with Astro + Tailwind CSS, deployed on Vercel. The contact form sends email via Resend.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321`|
| `npm run build`   | Build for production                    |
| `npm run preview` | Preview the production build            |

## Content

All copy, contact details, services, gallery items and images live in `src/data/site.ts`.
Placeholder photos are in `src/assets/placeholders/` (Unsplash); swap them for the client's drawings/photos.

Before launch, also update the domain in `astro.config.mjs` (`site`) and `public/robots.txt`.

## Contact form

Copy `.env.example` to `.env` and set:

- `RESEND_API_KEY` — from https://resend.com/api-keys
- `CONTACT_TO_EMAIL` — inbox that receives enquiries
- `CONTACT_FROM_EMAIL` — sender on a domain verified in Resend

Set the same variables in the Vercel project settings for production.
