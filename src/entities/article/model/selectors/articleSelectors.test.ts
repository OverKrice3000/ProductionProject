import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "entities/profile";
import type { ArticleRootSchema } from "../..";
import { testArticle } from "../..";
import { getArticleData, getArticleError, getArticleIsLoading } from "./articleSelectors";

describe(`articleSelectors`, () => {
  test(`should return article data`, () => {
    const state: DeepPartial<ArticleRootSchema> = {
      article: {
        data: testArticle,
      },
    };

    expect(getArticleData(state as ArticleRootSchema)).toEqual(testArticle);
  });

  test(`should return no data with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getArticleData(state as ArticleRootSchema)).toEqual(undefined);
  });

  test(`should return isLoading`, () => {
    const state: DeepPartial<ArticleRootSchema> = {
      article: {
        isLoading: true,
      },
    };

    expect(getArticleIsLoading(state as ArticleRootSchema)).toEqual(true);
  });

  test(`should return no isLoading with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getArticleIsLoading(state as ArticleRootSchema)).toEqual(undefined);
  });

  test(`should return error`, () => {
    const error = `Unexpected error occurred!`;
    const state: DeepPartial<ArticleRootSchema> = {
      article: {
        error,
      },
    };

    expect(getArticleError(state as ArticleRootSchema)).toEqual(error);
  });

  test(`should return no error with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getArticleError(state as ArticleRootSchema)).toEqual(undefined);
  });
});
