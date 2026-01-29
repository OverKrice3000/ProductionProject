import type { DeepPartial } from "shared/types/types";
import type { ArticleCommentsRootSchema } from "pages/ArticleDetailsPage";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "pages/ArticleDetailsPage/model/selectors/comments";

describe(`articleDetailsComments`, () => {
  test(`should return isLoading`, () => {
    const state: DeepPartial<ArticleCommentsRootSchema> = {
      comments: {
        isLoading: true,
      },
    };

    expect(getArticleCommentsIsLoading(state as ArticleCommentsRootSchema)).toEqual(true);
  });

  test(`should return no isLoading with empty state`, () => {
    const state: DeepPartial<ArticleCommentsRootSchema> = {};

    expect(getArticleCommentsIsLoading(state as ArticleCommentsRootSchema)).toEqual(undefined);
  });

  test(`should return error`, () => {
    const error = `Unexpected error occurred.`;
    const state: DeepPartial<ArticleCommentsRootSchema> = {
      comments: {
        error,
      },
    };

    expect(getArticleCommentsError(state as ArticleCommentsRootSchema)).toEqual(error);
  });

  test(`should return no error with empty state`, () => {
    const state: DeepPartial<ArticleCommentsRootSchema> = {};

    expect(getArticleCommentsError(state as ArticleCommentsRootSchema)).toEqual(undefined);
  });
});
