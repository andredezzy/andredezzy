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
        languageAlternates={[
          {
            hrefLang: 'pt-BR',
            href: 'https://www.andrevictor.me/pt-BR',
          },
        ]}
        openGraph={{
          type: 'profile',
          url: 'https://andrevictor.me/',
          site_name: 'andrevictor.me',
          title: 'André "Dezzy" Victor',
          description:
            'Hi, my name is André Victor, but can also call me Dezzy. Since I was 10 years old I develop for fun and at 15 I got my first internship. Programming and technology lover since ever. Passionate about Open Source projects. Extremely motivated to develop, learn and help anyone who can.',
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
