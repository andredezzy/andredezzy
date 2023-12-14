import { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';

export const runtime: ServerRuntime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const [robotoSerifRegular, robotoSerifBold] = await Promise.all([
    fetch(
      new URL(
        '../../../../public/fonts/RobotoSerif-Regular.ttf',
        import.meta.url,
      ),
    ).then(res => res.arrayBuffer()),
    fetch(
      new URL('../../../../public/fonts/RobotoSerif-Bold.ttf', import.meta.url),
    ).then(res => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="mt-4 flex flex-col">
          <div tw="relative items-center lg:flex">
            <h1 tw="text-3xl leading-3">Lorem ipsum</h1>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'robotoSerif',
          data: robotoSerifRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'robotoSerif',
          data: robotoSerifBold,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
