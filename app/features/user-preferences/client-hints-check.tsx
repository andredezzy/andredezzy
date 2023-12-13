'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { clientHints } from './cookies';

/**
 * @returns inline script element that checks for client hints and sets cookies
 * if they are not set then reloads the page if any cookie was set to an
 * inaccurate value.
 *
 * @credit https://github.com/epicweb-dev/epic-stack
 */
export function ClientHintsCheck({ nonce }: { nonce?: string }) {
  const { refresh } = useRouter();

  React.useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function handleThemeChange() {
      document.cookie = `${clientHints.prefersColorScheme.cookieName}=${
        themeQuery.matches ? 'dark' : 'light'
      }`;

      refresh();
    }

    themeQuery.addEventListener('change', handleThemeChange);

    return () => {
      themeQuery.removeEventListener('change', handleThemeChange);
    };
  }, [refresh]);

  return (
    <script
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `
          const cookies = document.cookie.split(';').map(c => c.trim()).reduce((acc, cur) => {
            const [key, value] = cur.split('=');
            acc[key] = value;
            return acc;
          }, {});
          let cookieChanged = false;
          const hints = [
          ${Object.values(clientHints)
            .map(hint => {
              const cookieName = JSON.stringify(hint.cookieName);

              return `{ name: ${cookieName}, actual: String(${hint.getValueCode}), cookie: cookies[${cookieName}] }`;
            })
            .join(',\n')}
          ];
          for (const hint of hints) {
            if (decodeURIComponent(hint.cookie) !== hint.actual) {
              cookieChanged = true;
              document.cookie = encodeURIComponent(hint.name) + '=' + encodeURIComponent(hint.actual) + ';path=/';
            }
          }
          // if the cookie changed, reload the page, unless the browser doesn't support
          // cookies (in which case we would enter an infinite loop of reloads)
          if (cookieChanged && navigator.cookieEnabled) {
            window.location.reload();
          }
			`,
      }}
    />
  );
}
