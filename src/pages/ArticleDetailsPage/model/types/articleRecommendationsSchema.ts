import type { EntityState } from "@reduxjs/toolkit";
import type { Article } from "entities/article";

export interface ArticleRecommendationsRootSchema {
  recommendations?: ArticleRecommendationsSchema;
}

export interface ArticleRecommendationsSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
