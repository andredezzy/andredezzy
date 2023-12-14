import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { notion } from '@/lib/notion';

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

export const revalidate = 3600;

export default async function ArticlePage({
  params,
}: {
  params: ArticlePageParams;
}) {
  const id = params.slug.split('-').slice(-1)[0];

  const response = await notion.pages.retrieve({ page_id: id });

  const article = response as Article;

  console.log(JSON.stringify(response, null, 2));

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

      <ThemeSwitcher />
    </article>
  );
}
