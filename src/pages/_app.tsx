import '@/styles/globals.css'

import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        openGraph={{
          type: 'profile',
          locale: 'pt_BR',
          url: 'https://andrevictor.me/',
          site_name: 'André "Dezzy" Victor',
          description: 'Hi, call me André or Dezzy, happy to see you :D',
          images: [
            {
              url: 'https://github.com/andredezzy/andredezzy/blob/main/.github/assets/og.jpg?raw=1',
            },
          ],
        }}
        twitter={{
          handle: '@andredezzy',
          site: '@andredezzy',
          cardType: 'summary',
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
