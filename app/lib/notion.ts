import { Client } from '@notionhq/client';

if (!process.env.NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID) {
  throw new Error(
    'NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID environment variable is not defined',
  );
}

if (!process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET) {
  throw new Error(
    'NEXT_PUBLIC_NOTION_INTEGRATION_SECRET environment variable is not defined',
  );
}

export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET,
});
