import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.baudypeinture.fr',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://www.baudypeinture.fr/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (item.url.includes('/zones/')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (item.url.includes('/services') || item.url.includes('/realisations')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
});