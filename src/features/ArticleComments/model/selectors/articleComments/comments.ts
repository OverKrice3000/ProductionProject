import type { ArticleCommentsRootSchema } from "../../types/articleCommentsSchema";

export const getArticleCommentsIsLoading = (state: ArticleCommentsRootSchema) => state.comments?.isLoading;
export const getArticleCommentsError = (state: ArticleCommentsRootSchema) => state.comments?.error;
