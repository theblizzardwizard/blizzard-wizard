import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://blizzard-wizard.vercel.app',
  integrations: [
    tailwind(),
    alpinejs(),
  ],
});
