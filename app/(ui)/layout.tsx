import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { ClientHintsCheck } from '@/features/user-preferences/client-hints-check';
import { getUserPreferences } from '@/features/user-preferences/get-user-preferences';

import { UserPreferencesProvider } from '../features/user-preferences/user-preferences-context';
import { cn } from '../lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const adobeTextProRegularFont = localFont({
  src: '../../public/fonts/AdobeTextPro-Regular.ttf',
  display: 'swap',
  variable: '--font-adobe-text-pro-regular',
  weight: '400',
});

const adobeTextProSemiboldFont = localFont({
  src: '../../public/fonts/AdobeTextPro-Semibold.ttf',
  display: 'swap',
  variable: '--font-adobe-text-pro-semibold',
  weight: '600',
});

export const metadata: Metadata = {
  title: 'André "Dezzy" Victor',
  description:
    'Software Engineer. Designer. DevTools & Open Source enthusiast. Entrepreneur. Cars amateur. Photographer. Traveling and (trying) fitness/bodybuilding lifestyle.',
  metadataBase: new URL('https://andredezzy.com'),
  openGraph: {
    title: 'André "Dezzy" Victor',
    description:
      'Software Engineer. Designer. DevTools & Open Source enthusiast. Entrepreneur. Cars amateur. Photographer. Traveling and (trying) fitness/bodybuilding lifestyle.',
    type: 'website',
    url: 'https://andredezzy.com',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'André "Dezzy" Victor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'André "Dezzy" Victor',
    description:
      'Software Engineer. Designer. DevTools & Open Source enthusiast. Entrepreneur. Cars amateur. Photographer. Traveling and (trying) fitness/bodybuilding lifestyle.',
    creator: '@andredezzy',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userPreferences = getUserPreferences();
  const theme = userPreferences.theme || userPreferences.prefersColorScheme;

  return (
    <html
      lang="en"
      className={cn([
        theme,
        inter.variable,
        adobeTextProRegularFont.variable,
        adobeTextProSemiboldFont.variable,
      ])}
    >
      <head>
        <ClientHintsCheck />
      </head>

      <body>
        <UserPreferencesProvider userPreferences={userPreferences}>
          {children}
        </UserPreferencesProvider>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
