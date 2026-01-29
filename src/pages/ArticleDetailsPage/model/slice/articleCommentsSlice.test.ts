import type { DeepPartial } from "shared/types/types";
import type { ArticleCommentsSchema } from "pages/ArticleDetailsPage/model/types/articleCommentsSchema";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId";
import { testComments, testCommentsState } from "pages/ArticleDetailsPage/model/constants/tests/comment";
import { commentsReducer } from "pages/ArticleDetailsPage";

describe(`articleCommentsSlice`, () => {
  test(`fetchArticleById pending state`, () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: false,
      error: `Unexpected error`,
    };

    expect(commentsReducer(state as ArticleCommentsSchema, fetchCommentsByArticleId.pending)).toEqual({
      isLoading: true,
    });
  });

  test(`fetchArticleById fulfilled state`, () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
    };

    expect(commentsReducer(state as ArticleCommentsSchema, fetchCommentsByArticleId.fulfilled(testComments, `requestId`, `1`))).toEqual({
      ...testCommentsState,
      isLoading: false,
    });
  });

  test(`fetchArticleById rejected state`, () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
    };
    const error = `Unexpected error`;

    expect(commentsReducer(state as ArticleCommentsSchema, fetchCommentsByArticleId.rejected(new Error(`Failed`), `requestId`, `1`, error))).toEqual({
      isLoading: false,
      error,
    });
  });
});
