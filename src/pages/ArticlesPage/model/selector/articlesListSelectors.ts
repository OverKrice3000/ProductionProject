import type { ArticlesListRootSchema } from "pages/ArticlesPage";

export const getArticlesListIsLoading = (state: ArticlesListRootSchema) => state.articlesList?.isLoading;
export const getArticlesListError = (state: ArticlesListRootSchema) => state.articlesList?.error;
export const getArticlesListView = (state: ArticlesListRootSchema) => state.articlesList?.view;
