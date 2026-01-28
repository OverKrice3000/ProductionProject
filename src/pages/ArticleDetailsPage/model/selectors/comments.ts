import type { ArticleCommentsRootSchema } from "pages/ArticleDetailsPage";

export const getArticleCommentsIsLoading = (state: ArticleCommentsRootSchema) => state.comments?.isLoading;
export const getArticleCommentsError = (state: ArticleCommentsRootSchema) => state.comments?.error;
