import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
    sitemap(),
    robotsTxt(),
    webmanifest({
      name: 'Tovuwata',
      icon: 'src/public/favicon.svg',
      short_name: 'Tovuwata',
      description: 'Tovuwataのウェブサイトです。',
      start_url: '/',
      theme_color: '#84C98B',
      background_color: '#000000',
      display: 'standalone',
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  site: "https://dampuzakura.github.io",
  base: "/",
});
