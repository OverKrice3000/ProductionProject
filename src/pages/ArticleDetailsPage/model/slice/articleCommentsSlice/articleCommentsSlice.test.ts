import type { DeepPartial } from "shared/types/types";
import type { ArticleCommentsSchema } from "../../types/articleCommentsSchema";
import { fetchCommentsByArticleId } from "../../service/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { testComments, testCommentsState } from "../../constants/tests/comment";
import { commentsReducer } from "../../..";

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
