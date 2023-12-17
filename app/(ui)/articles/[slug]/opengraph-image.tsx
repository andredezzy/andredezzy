import { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';

import { NotionArticle } from '@/interfaces/notion-article';
import { notion } from '@/lib/notion';

import { ArticlePageParams } from './page';

export const runtime: ServerRuntime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: ArticlePageParams }) {
  const id = params.slug.split('-').slice(-1)[0];

  const article = (await notion.pages.retrieve({
    page_id: id,
  })) as NotionArticle;

  const [adobeTextProRegular, adobeTextProSemibold] = await Promise.all([
    fetch(
      new URL(
        '../../../../public/fonts/AdobeTextPro-Regular.ttf',
        import.meta.url,
      ),
    ).then(res => res.arrayBuffer()),
    fetch(
      new URL(
        '../../../../public/fonts/AdobeTextPro-Semibold.ttf',
        import.meta.url,
      ),
    ).then(res => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center border border-black px-24 py-20">
        <h1 tw="font-serif text-6xl font-semibold leading-normal text-foreground">
          {article.properties.Name.title[0].plain_text} (
          {article.properties.Status.status.name})
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'AdobeTextPro',
          data: adobeTextProRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'AdobeTextPro',
          data: adobeTextProSemibold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
}
