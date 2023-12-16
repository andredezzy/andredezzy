import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { NOTION_BLOG_DATABASE_ID, notion } from '@/lib/notion';

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

  const response = await notion.pages.retrieve({ page_id: id });

  const { results: blocks } = await notion.blocks.children.list({
    block_id: id,
  });

  const article = response as Article;

  return (
    <article className="container min-h-screen space-y-6 py-20">
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

      <pre>{JSON.stringify(blocks, null, 2)}</pre>

      <ThemeSwitcher />
    </article>
  );
}
