import { Client } from '@notionhq/client';

if (!process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET) {
  throw new Error(
    'NEXT_PUBLIC_NOTION_INTEGRATION_SECRET environment variable is not defined',
  );
}

if (!process.env.NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID) {
  throw new Error(
    'NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID environment variable is not defined',
  );
}

if (!process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID) {
  throw new Error(
    'NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID environment variable is not defined',
  );
}

export const NOTION_INTEGRATION_SECRET = String(
  process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET,
);

export const NOTION_BLOG_DATABASE_ID = String(
  process.env.NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID,
);

export const NOTION_PROJECTS_DATABASE_ID = String(
  process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID,
);

export const notion = new Client({
  auth: NOTION_INTEGRATION_SECRET,
  fetch: (url, options) =>
    fetch(url, {
      ...options,
      next: { revalidate: 600 },
    }),
});
