'use client';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

import { useUserPreferences } from '@/features/user-preferences/user-preferences-context';

interface ArticleNotionRendererProps {
  recordMap: ExtendedRecordMap;
}

export function ArticleNotionRenderer({
  recordMap,
}: ArticleNotionRendererProps) {
  const { theme, prefersColorScheme } = useUserPreferences();

  return (
    <NotionRenderer
      recordMap={recordMap}
      className="!mx-0 !w-full !px-0"
      darkMode={prefersColorScheme === 'dark' || theme === 'dark'}
    />
  );
}
