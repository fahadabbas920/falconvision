// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the client's real domain before launch (used for canonical URLs + sitemap).
  site: 'https://www.falconvisionengineering.com',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        default: 'Falcon Vision Website <onboarding@resend.dev>'
      })
    }
  },

  integrations: [sitemap()],
  adapter: vercel()
});
