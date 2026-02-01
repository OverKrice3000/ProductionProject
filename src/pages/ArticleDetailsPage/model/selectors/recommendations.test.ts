import type { DeepPartial } from "shared/types/types";
import type { ArticleRecommendationsRootSchema } from "pages/ArticleDetailsPage";
import { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";

describe(`articleDetailsRecommendations`, () => {
  test(`should return isLoading`, () => {
    const state: DeepPartial<ArticleRecommendationsRootSchema> = {
      recommendations: {
        isLoading: true,
      },
    };

    expect(getArticleRecommendationsIsLoading(state as ArticleRecommendationsRootSchema)).toEqual(true);
  });

  test(`should return no isLoading with empty state`, () => {
    const state: DeepPartial<ArticleRecommendationsRootSchema> = {};

    expect(getArticleRecommendationsIsLoading(state as ArticleRecommendationsRootSchema)).toEqual(undefined);
  });

  test(`should return error`, () => {
    const error = `Unexpected error occurred.`;
    const state: DeepPartial<ArticleRecommendationsRootSchema> = {
      recommendations: {
        error,
      },
    };

    expect(getArticleRecommendationsError(state as ArticleRecommendationsRootSchema)).toEqual(error);
  });

  test(`should return no error with empty state`, () => {
    const state: DeepPartial<ArticleRecommendationsRootSchema> = {};

    expect(getArticleRecommendationsError(state as ArticleRecommendationsRootSchema)).toEqual(undefined);
  });
});
