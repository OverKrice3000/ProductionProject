import type { DeepPartial } from "shared/types/types";
import type { ArticleSchema } from "entities/article/model/types/article";
import { articleReducer } from "entities/article/model/slice/articleSlice";
import { fetchArticleById } from "entities/article/model/services/fetchArticleById/fetchArticleById";
import { testArticle } from "entities/article";

describe(`articleSlice`, () => {
  test(`updateProfileData pending state`, () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: false,
      error: `Unexpected error`,
    };

    expect(articleReducer(state as ArticleSchema, fetchArticleById.pending)).toEqual({
      isLoading: true,
    });
  });

  test(`updateProfileData fulfilled state`, () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: true,
    };

    expect(articleReducer(state as ArticleSchema, fetchArticleById.fulfilled(testArticle, `requestId`, `1`))).toEqual({
      isLoading: false,
      data: testArticle,
    });
  });

  test(`updateProfileData rejected state`, () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: true,
    };
    const error = `Unexpected error`;

    expect(articleReducer(state as ArticleSchema, fetchArticleById.rejected(new Error(`Failed`), `requestId`, `1`, error))).toEqual({
      isLoading: false,
      error,
    });
  });
});
