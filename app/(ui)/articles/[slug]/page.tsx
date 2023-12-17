import { ArrowLeft, Eye } from 'lucide-react';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { NotionArticle } from '@/interfaces/notion-article';
import { NOTION_BLOG_DATABASE_ID, notion } from '@/lib/notion';

import { ArticleNotionRenderer } from './article-notion-renderer';
import { ArticleNotionViewCounter } from './article-notion-view-counter';

export type ArticlePageParams = {
  slug: string;
};

export const revalidate = 600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
  });

  const articles = response.results as NotionArticle[];

  return articles.map(article => {
    const slug = new URL(article.url).pathname;

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

  const article = (await notion.pages.retrieve({
    page_id: id,
  })) as NotionArticle;

  const notionClient = new NotionAPI();

  const recordMap = await notionClient.getPage(id);

  return (
    <>
      <ArticleNotionViewCounter articlePageId={id} />

      <Link href="/">
        <ArrowLeft size={24} />
      </Link>

      <h1 className="font-serif text-2xl font-bold">
        {article.properties.Name.title[0].plain_text} (
        {article.properties.Status.status.name})
      </h1>

      <div className="flex items-center gap-3 text-indigo-500 dark:text-indigo-400">
        <Link className="block underline" href={article.public_url || '#'}>
          Read on Notion
        </Link>

        <div className="flex items-center gap-1">
          <Eye size={16} />

          <span>{article.properties['Blog views count'].number}</span>
        </div>
      </div>

      <ArticleNotionRenderer recordMap={recordMap} />

      <ThemeSwitcher />
    </>
  );
}
