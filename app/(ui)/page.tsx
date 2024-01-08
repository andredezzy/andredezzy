import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { NotionBlogArticle } from '@/interfaces/notion-blog-article';
import { NotionProject } from '@/interfaces/notion-project';
import {
  NOTION_BLOG_DATABASE_ID,
  NOTION_PROJECTS_DATABASE_ID,
  notion,
} from '@/lib/notion';
import { cn } from '@/lib/utils';

export const revalidate = 600;

export default async function HomePage() {
  const blogResponse = await notion.databases.query({
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

  const articles = blogResponse.results as NotionBlogArticle[];

  const openSourceProjectsResponse = await notion.databases.query({
    database_id: NOTION_PROJECTS_DATABASE_ID,
    filter: {
      property: 'Type',
      multi_select: {
        contains: 'Open Source ✨',
      },
    },
  });

  const openSourceProjects =
    openSourceProjectsResponse.results as NotionProject[];

  return (
    <main className="container min-h-screen space-y-8 divide-y py-20">
      <header className="space-y-6">
        <h1 className="font-serif text-3xl font-semibold">
          André &quot;Dezzy&quot; Victor
        </h1>

        <p className="text-muted-foreground">
          Software Engineer. Designer. DevTools & Open Source enthusiast.
          Entrepreneur. Cars amateur. Photographer. Traveling and (trying)
          fitness/bodybuilding lifestyle.
        </p>

        <Link
          className="block text-indigo-500 underline hover:text-indigo-600 dark:text-indigo-400 hover:dark:dark:text-indigo-300"
          href="https://notion.andredezzy.com"
        >
          Resume on Notion
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/andredezzy"
            target="_blank"
            className="hover:opacity-70"
          >
            <GithubIcon strokeWidth={1.5} />
          </a>

          <a
            href="https://x.com/andredezzy"
            target="_blank"
            className="hover:opacity-70"
          >
            <TwitterIcon strokeWidth={1.5} />
          </a>

          <a
            href="https://linkedin.com/in/andredezzy"
            target="_blank"
            className="hover:opacity-70"
          >
            <LinkedinIcon strokeWidth={1.5} />
          </a>

          <a
            href="mailto:hello@andredezzy.com"
            target="_blank"
            className="hover:opacity-70"
          >
            <MailIcon strokeWidth={1.5} />
          </a>

          <div className="ml-0.5 flex items-center gap-3">
            <a
              href="https://instagram.com/andre.dezzy"
              target="_blank"
              className="flex items-center gap-1 text-xl hover:opacity-70"
            >
              <InstagramIcon strokeWidth={1.5} />
              🙋🏻‍♂️
            </a>

            <a
              href="https://instagram.com/dezzy.visions"
              target="_blank"
              className="flex items-center gap-1 text-xl hover:opacity-70"
            >
              <InstagramIcon strokeWidth={1.5} />
              📸
            </a>
          </div>
        </div>
      </header>

      <section className="space-y-6 pt-8">
        <h2 className="text-lg font-medium">Blog</h2>

        <ul className="flex flex-col gap-2">
          {articles.map(article => {
            const slug = '/blog' + new URL(article.url).pathname;

            return (
              <li key={article.id}>
                <Link
                  className={cn('underline', {
                    'text-muted-foreground':
                      article.properties.Status.status.name !== 'Published',
                    'text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 hover:dark:dark:text-indigo-300':
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
      </section>

      <section className="space-y-6 pt-8">
        <h2 className="text-lg font-medium">Open source projects</h2>

        <ul className="flex flex-col gap-2">
          {openSourceProjects.map(project => {
            return (
              <li key={project.id}>
                <Link
                  target="_blank"
                  className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 hover:dark:dark:text-indigo-300"
                  href={project.properties['Source code URL'].url}
                >
                  <span className="underline">
                    {project.properties.Name.title[0].plain_text}
                  </span>

                  <span>{': '}</span>

                  <span className="text-muted-foreground">
                    {project.properties.Description.rich_text[0].plain_text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="pt-8">
        <ThemeSwitcher />
      </footer>
    </main>
  );
}
