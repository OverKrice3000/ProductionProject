import { ArticleView } from "entities/article";
import type { SortOrder } from "shared/types/sort";
import { ArticleSortField } from "pages/ArticlesPage/model/types/articlesList";

export const defaultView = ArticleView.PLATE;
export const defaultOrder: SortOrder = `asc`;
export const defaultSortField: ArticleSortField = ArticleSortField.TITLE;

export const articlesFetchNumberByView = {
  [ArticleView.LIST]: 4,
  [ArticleView.PLATE]: 9,
};

export const articlesFetchDebounceDelay = 500;
