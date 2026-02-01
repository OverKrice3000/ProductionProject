import type { DeepPartial } from "shared/types/types";
import type { ArticleRecommendationsSchema } from "pages/ArticleDetailsPage/model/types/articleRecommendationsSchema";
import {
  recommendationsReducer,
} from "pages/ArticleDetailsPage/model/slice/articleRecommendationsSlice/articleRecommendationsSlice";
import {
  fetchArticleRecommendations,
} from "pages/ArticleDetailsPage/model/service/fetchArticleRecommentations/fetchArticleRecommendations";
import { testArticle } from "entities/article";
import { articlesTestState } from "entities/article/constants/tests/article";

describe(`articleRecommendationsSlice`, () => {
  test(`fetchArticleById pending state`, () => {
    const state: DeepPartial<ArticleRecommendationsSchema> = {
      isLoading: false,
      error: `Unexpected error`,
      ids: [],
      entities: {},
    };

    expect(recommendationsReducer(state as ArticleRecommendationsSchema, fetchArticleRecommendations.pending)).toEqual({
      isLoading: true,
      ids: [],
      entities: {},
    });
  });

  test(`fetchArticleById fulfilled state`, () => {
    const state: DeepPartial<ArticleRecommendationsSchema> = {
      isLoading: true,
    };

    expect(recommendationsReducer(state as ArticleRecommendationsSchema, fetchArticleRecommendations.fulfilled([testArticle], `requestId`))).toEqual({
      ...articlesTestState,
      isLoading: false,
    });
  });

  test(`fetchArticleById rejected state`, () => {
    const state: DeepPartial<ArticleRecommendationsSchema> = {
      isLoading: true,
    };
    const error = `Unexpected error`;

    expect(recommendationsReducer(state as ArticleRecommendationsSchema, fetchArticleRecommendations.rejected(new Error(`Failed`), `requestId`, undefined, error))).toEqual({
      isLoading: false,
      error,
    });
  });
});
