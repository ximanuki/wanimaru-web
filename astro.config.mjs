// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://wanimaru.jp',
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-navigation-menu']
          }
        }
      }
    },
    optimizeDeps: {
      exclude: ['gsap']
    }
  },
  image: {
    remotePatterns: [{
      protocol: 'https'
    }]
  }
});
