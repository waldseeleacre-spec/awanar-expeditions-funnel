import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  distDir: 'dist',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    envPrefix: 'PUBLIC_'
  }
});
