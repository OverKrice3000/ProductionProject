import type { DeepPartial } from "@/shared/types/types";
import type { ArticleCommentsSchema } from "../../types/articleCommentsSchema";
import { fetchCommentsByArticleId } from "../../service/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { commentsReducer } from "../../slice/articleCommentsSlice/articleCommentsSlice";
import { getTestCommentsList } from '@/entities/Comment';
import { normalizeData } from "@/shared/utils/redux/normalizeData";

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
    const testComments = getTestCommentsList(3);
    const normalizedState = normalizeData(testComments, (data) => data.id);

    expect(commentsReducer(state as ArticleCommentsSchema, fetchCommentsByArticleId.fulfilled(testComments, `requestId`, `1`))).toEqual({
      ...normalizedState,
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
