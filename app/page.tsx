import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

export default async function Home() {
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
    <main className="min-h-screen flex-col space-y-6 p-24">
      <h1 className="text-2xl font-bold">André &quot;Dezzy&quot; Victor</h1>

      <h2 className="text-lg font-bold">Articles</h2>

      <ul className="flex flex-col gap-2">
        {articles.map(article => (
          <li key={article.id}>
            <a href={article.public_url || '#'}>
              {article.properties.Name.title[0].plain_text} (
              {article.properties.Status.status.name})
            </a>
          </li>
        ))}
      </ul>

      <ThemeSwitcher />
    </main>
  );
}
