import type { Article, ArticleView } from "entities/article";
import type { EntityState } from "@reduxjs/toolkit";
import type { SortOrder } from "shared/types/sort";

export enum ArticleSortField {
  VIEWS = `views`,
  TITLE = `title`,
  CREATED_AT = `createdAt`
}

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

  order: SortOrder;
  sortField: ArticleSortField;
  search: string;
}
