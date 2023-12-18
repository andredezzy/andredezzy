'use server';

import { Client } from '@notionhq/client';

import { NotionBlogArticle } from '@/interfaces/notion-blog-article';
import { NOTION_INTEGRATION_SECRET } from '@/lib/notion';

const notion = new Client({
  auth: NOTION_INTEGRATION_SECRET,
});

export async function incrementNotionArticleBlogViewCount(
  articlePageId: string,
) {
  const articlePage = (await notion.pages.retrieve({
    page_id: articlePageId,
  })) as NotionBlogArticle;

  const viewsCount = articlePage.properties['Blog views count'].number ?? 0;

  notion.pages.update({
    page_id: articlePageId,
    properties: {
      'Blog views count': {
        number: viewsCount + 1,
      },
    },
  });
}
