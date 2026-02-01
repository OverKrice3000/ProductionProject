import type { ArticleRecommendationsRootSchema } from "pages/ArticleDetailsPage";

export const getArticleRecommendationsIsLoading = (state: ArticleRecommendationsRootSchema) => state.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: ArticleRecommendationsRootSchema) => state.recommendations?.error;
