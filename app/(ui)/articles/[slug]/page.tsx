import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { NOTION_BLOG_DATABASE_ID, notion } from '@/lib/notion';

import { ArticleNotionRenderer } from './article-notion-renderer';

type Article = PageObjectResponse & {
  properties: {
    Name: {
      title: [
        {
          plain_text: string;
        },
      ];
    };
  };
};

export type ArticlePageParams = {
  slug: string;
};

export const revalidate = 600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
  });

  const articles = response.results as Article[];

  return articles.map(article => {
    const slug = '/articles' + new URL(article.url).pathname;

    return {
      slug,
    };
  });
}

export default async function ArticlePage({
  params,
}: {
  params: ArticlePageParams;
}) {
  const id = params.slug.split('-').slice(-1)[0];

  const article = (await notion.pages.retrieve({ page_id: id })) as Article;

  const notionClient = new NotionAPI();

  const recordMap = await notionClient.getPage(id);

  return (
    <>
      <Link href="/">
        <ArrowLeft size={24} />
      </Link>

      <h1 className="font-serif text-2xl font-bold">
        {article.properties.Name.title[0].plain_text}
      </h1>

      <Link
        className="block text-indigo-500 underline dark:text-indigo-400"
        href={article.public_url || '#'}
      >
        Read on Notion
      </Link>

      <ArticleNotionRenderer recordMap={recordMap} />

      <ThemeSwitcher />
    </>
  );
}
