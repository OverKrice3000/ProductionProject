import { ArticleType, ArticleView, ArticleSortField } from "@/entities/Article";
import type { SortOrder } from "@/shared/types/sort";

export const defaultView = ArticleView.PLATE;
export const defaultOrder: SortOrder = `asc`;
export const defaultSortField: ArticleSortField = ArticleSortField.TITLE;
export const defaultType: ArticleType = ArticleType.ALL;

export const articlesFetchNumberByView = {
  [ArticleView.LIST]: 4,
  [ArticleView.PLATE]: 9,
};

export const articlesFetchDebounceDelay = 500;
