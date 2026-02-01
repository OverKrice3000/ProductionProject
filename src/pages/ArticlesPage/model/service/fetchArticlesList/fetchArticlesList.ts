import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Article } from "entities/article";
import { getArticlesListPageLimit } from "pages/ArticlesPage/model/selector/articlesListSelectors";
import type { AxiosResponse } from "axios";

export interface FetchArticlesListProps {
  page?: number;
}

export interface FetchArticlesListResult {
  articles: Article[];
  hasMore: boolean;
}

export const fetchArticlesList = createAsyncThunk<FetchArticlesListResult, FetchArticlesListProps, ThunkConfig<string>>(
    `articlesPage/fetchArticlesList`,
    async ({ page = 1 },
      { extra, rejectWithValue, getState },
    ) => {
      try {
        const limit = getArticlesListPageLimit(getState());
        const response = await extra.api.get<Article[], AxiosResponse<Article[]>>(`/articles`, {
          params: {
            _expand: `user`,
            _page: page,
            _limit: limit,
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return { articles: response.data, hasMore: response.data.length === limit };
      } catch (e) {
        console.log(e);

        return rejectWithValue(`UnexpectedError`);
      }
    });
