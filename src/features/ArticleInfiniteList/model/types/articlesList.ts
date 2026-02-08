import type { Article, ArticleType, ArticleView, ArticleSortField } from "@/entities/Article";
import type { EntityState } from "@reduxjs/toolkit";
import type { SortOrder } from "@/shared/types/sort";

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
  type: ArticleType;
}
