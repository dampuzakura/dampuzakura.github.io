import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts.astro';

export const GET: APIRoute = async (context) => {
  let posts = await getPosts();
  return rss({
    title: '段風桜のブログ',
    description: '段風桜のブログのRSSフィードです。',
    site: context.site ?? '',
    items: posts.slice(0, 30).map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.date,
      link: post.url,
    })),
    customData: `<language>ja-jp</language>`,
  });
};
