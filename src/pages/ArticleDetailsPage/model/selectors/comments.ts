import type { ArticleCommentsRootSchema } from "../..";

export const getArticleCommentsIsLoading = (state: ArticleCommentsRootSchema) => state.comments?.isLoading;
export const getArticleCommentsError = (state: ArticleCommentsRootSchema) => state.comments?.error;
