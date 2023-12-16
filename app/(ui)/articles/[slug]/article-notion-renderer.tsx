'use client';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

interface ArticleNotionRendererProps {
  recordMap: ExtendedRecordMap;
}

export function ArticleNotionRenderer({
  recordMap,
}: ArticleNotionRendererProps) {
  return (
    <NotionRenderer recordMap={recordMap} className="!mx-0 !w-full !px-0" />
  );
}
