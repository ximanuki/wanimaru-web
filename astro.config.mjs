// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://wanimaru.com', // TODO: 本番URLに変更
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
