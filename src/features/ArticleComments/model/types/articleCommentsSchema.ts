import type { AppComment } from "@/entities/Comment";

import type { EntityState } from "@reduxjs/toolkit";

export interface ArticleCommentsRootSchema {
  comments?: ArticleCommentsSchema;
}

export interface ArticleCommentsSchema extends EntityState<AppComment> {
  isLoading?: boolean;
  error?: string;
}
