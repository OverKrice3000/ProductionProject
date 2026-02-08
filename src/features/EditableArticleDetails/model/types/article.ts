import type { Article } from "@/entities/Article";

export interface ArticleRootSchema {
  article?: ArticleSchema;
}

export interface ArticleSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
