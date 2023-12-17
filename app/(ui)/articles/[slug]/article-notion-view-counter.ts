'use client';

import { useEffect } from 'react';

import { incrementNotionArticleBlogViewCount } from './increment-notion-article-blog-view-count';

interface ArticleViewCounterProps {
  articlePageId: string;
}

export function ArticleNotionViewCounter({
  articlePageId,
}: ArticleViewCounterProps) {
  useEffect(() => {
    incrementNotionArticleBlogViewCount(articlePageId);
  }, [articlePageId]);

  return null;
}
