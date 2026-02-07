import type { ArticlesListRootSchema } from "../../../../pages/ArticlesPage";
import {
  defaultOrder,
  defaultSortField,
  defaultType,
  defaultView,
} from "../../lib/articlesList";

export const getArticlesListIsLoading = (state: ArticlesListRootSchema) => state.articlesList?.isLoading;
export const getArticlesListError = (state: ArticlesListRootSchema) => state.articlesList?.error;
export const getArticlesListView = (state: ArticlesListRootSchema) => state.articlesList?.view ?? defaultView;
export const getArticlesListPageLimit = (state: ArticlesListRootSchema) => state.articlesList?.limit;
export const getArticlesListPageNumber = (state: ArticlesListRootSchema) => state.articlesList?.page ?? 1;
export const getArticlesListPageHasMore = (state: ArticlesListRootSchema) => state.articlesList?.hasMore;
export const getArticlesListOrder = (state: ArticlesListRootSchema) => state.articlesList?.order ?? defaultOrder;
export const getArticlesListSortField = (state: ArticlesListRootSchema) => state.articlesList?.sortField ?? defaultSortField;
export const getArticlesListSearch = (state: ArticlesListRootSchema) => state.articlesList?.search ?? ``;
export const getArticlesListType = (state: ArticlesListRootSchema) => state.articlesList?.type ?? defaultType;
