import { rtkApi } from "@/shared/api/rtkApi/rtkApi";
import type { AppRating } from "@/entities/Rating";

export interface GetArticleRatingsParameters {
  userId: string;
  articleId: string;
}

export interface RateArticleParameters {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserArticleRating: build.query<AppRating[], GetArticleRatingsParameters>(
      {
        query: ({ userId, articleId }) => ({
          url: `/article-ratings`,
          params: {
            userId,
            articleId,
          },
        }),
      },
    ),
    rateArticle: build.mutation<void, RateArticleParameters>({
      query: (data) => ({
        url: `/article-ratings`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});

export const useUserArticleRating =
  articleRatingsApi.useGetUserArticleRatingQuery;
export const useRateArticle = articleRatingsApi.useRateArticleMutation;
