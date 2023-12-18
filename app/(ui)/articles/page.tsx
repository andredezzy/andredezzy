import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { NotionArticle } from '@/interfaces/notion-article';
import { NOTION_BLOG_DATABASE_ID, notion } from '@/lib/notion';
import { cn } from '@/lib/utils';

export const revalidate = 600;

export default async function HomePage() {
  const response = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
      {
        property: 'Status',
        direction: 'descending',
      },
      {
        property: 'Last edited time',
        direction: 'descending',
      },
    ],
  });

  const articles = response.results as NotionArticle[];

  return (
    <main className="container min-h-screen space-y-8 py-20">
      <Link href="/">
        <ArrowLeft size={24} />
      </Link>

      <h2 className="text-lg font-medium">Articles</h2>

      <ul className="flex flex-col gap-2">
        {articles.map(article => {
          const slug = '/articles' + new URL(article.url).pathname;

          return (
            <li key={article.id}>
              <Link
                className={cn('underline', {
                  'text-muted-foreground':
                    article.properties.Status.status.name !== 'Published',
                  'text-indigo-500 dark:text-indigo-400':
                    article.properties.Status.status.name === 'Published',
                })}
                href={slug}
              >
                {article.properties.Name.title[0].plain_text} (
                {article.properties.Status.status.name})
              </Link>
            </li>
          );
        })}
      </ul>

      <ThemeSwitcher />
    </main>
  );
}
