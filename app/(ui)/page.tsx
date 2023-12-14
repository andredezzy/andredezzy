import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
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
    Status: {
      status: {
        name: string;
      };
    };
  };
};

export default async function HomePage() {
  const response = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  const articles = response.results as Article[];

  console.log(JSON.stringify(articles, null, 2));

  return (
    <main className="container min-h-screen space-y-6 py-20">
      <h1 className="font-serif text-2xl font-bold">
        André &quot;Dezzy&quot; Victor
      </h1>

      <h2 className="text-lg font-bold">Articles</h2>

      <ul className="flex flex-col gap-2">
        {articles.map(article => {
          const path = '/articles' + new URL(article.url).pathname;

          return (
            <li key={article.id}>
              <Link
                className="text-indigo-500 underline dark:text-indigo-400"
                href={path}
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
