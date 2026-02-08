import type { ArticleRootSchema } from '../..';

export const getArticleData = (state: ArticleRootSchema) => state.article?.data;
export const getArticleIsLoading = (state: ArticleRootSchema) => state.article?.isLoading;
export const getArticleError = (state: ArticleRootSchema) => state.article?.error;
