import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import {
  ClientHintsCheck,
  UserPreferencesProvider,
} from '@/features/user-preferences/client-hints-check';
import { getUserPreferences } from '@/features/user-preferences/get-user-preferences';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en" className={cn([theme, inter.variable])}>
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
