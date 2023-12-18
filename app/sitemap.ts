import { MetadataRoute } from 'next';

import { NotionBlogArticle } from './interfaces/notion-blog-article';
import { NOTION_BLOG_DATABASE_ID, notion } from './lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
  });

  const articles = response.results as NotionBlogArticle[];

  return [
    {
      url: 'https://andredezzy.com',
      priority: 1,
    },
    {
      url: 'https://andredezzy.com/blog',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles.map(article => {
      const slug = 'blog' + new URL(article.url).pathname;

      return {
        url: `https://andredezzy.com/${slug}`,
        lastModified: article.properties['Last edited time'].last_edited_time,
      };
    }),
  ];
}
