import { ServerRuntime } from 'next';
import { headers } from 'next/headers';
import { ImageResponse } from 'next/og';

import { NotionBlogArticle } from '@/interfaces/notion-blog-article';
import { notion } from '@/lib/notion';

import { ArticlePageParams } from './page';

export const runtime: ServerRuntime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: ArticlePageParams }) {
  const id = params.slug.split('-').slice(-1)[0];

  const article = (await notion.pages.retrieve({
    page_id: id,
  })) as NotionBlogArticle;

  const protocol = headers().get('x-forwarded-proto') || 'http';
  const host = headers().get('host');

  const [adobeTextProRegular, adobeTextProSemibold, interRegular] =
    await Promise.all([
      fetch(`${protocol}://${host}/fonts/AdobeTextPro-Regular.ttf`).then(res =>
        res.arrayBuffer(),
      ),
      fetch(`${protocol}://${host}/fonts/AdobeTextPro-Semibold.ttf`).then(res =>
        res.arrayBuffer(),
      ),
      fetch(`${protocol}://${host}/fonts/Inter-Regular.ttf`).then(res =>
        res.arrayBuffer(),
      ),
    ]);

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col justify-between bg-white px-24 py-20">
        <h1
          style={{ fontFamily: 'AdobeTextPro' }}
          tw="text-6xl font-semibold leading-normal"
        >
          {article.properties.Name.title[0].plain_text} (
          {article.properties.Status.status.name})
        </h1>

        <span style={{ fontFamily: 'Inter' }} tw="text-3xl">
          @andredezzy
        </span>
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
        {
          name: 'Inter',
          data: interRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
