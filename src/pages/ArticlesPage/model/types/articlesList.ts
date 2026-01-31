import type { Article, ArticleView } from "entities/article";
import type { EntityState } from "@reduxjs/toolkit";

export interface ArticlesListRootSchema {
  articlesList?: ArticlesListSchema;
}

export interface ArticlesListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view: ArticleView;

  page: number;
  hasMore: boolean;
  limit?: number;
}
