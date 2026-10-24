// Shared by the contact form (browser validation) and /api/contact (server validation).
export const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 200 },
  message: { min: 10, max: 5000 },
};

// Requires a dot and a 2+ letter ending after the @, so "name@gmail" is rejected.
// Written without anchors so it also works in the HTML `pattern` attribute, which anchors implicitly.
export const EMAIL_PATTERN = '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}';
