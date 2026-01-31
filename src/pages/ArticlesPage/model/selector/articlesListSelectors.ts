import type { ArticlesListRootSchema } from "pages/ArticlesPage";

export const getArticlesListIsLoading = (state: ArticlesListRootSchema) => state.articlesList?.isLoading;
export const getArticlesListError = (state: ArticlesListRootSchema) => state.articlesList?.error;
export const getArticlesListView = (state: ArticlesListRootSchema) => state.articlesList?.view;
export const getArticlesListPageLimit = (state: ArticlesListRootSchema) => state.articlesList?.limit;
export const getArticlesListPageNumber = (state: ArticlesListRootSchema) => state.articlesList?.page ?? 1;
export const getArticlesListPageHasMore = (state: ArticlesListRootSchema) => state.articlesList?.hasMore;
