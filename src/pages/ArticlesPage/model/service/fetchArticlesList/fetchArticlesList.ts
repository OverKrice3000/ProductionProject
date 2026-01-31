import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Article } from "entities/article";
import { getArticlesListPageLimit } from "pages/ArticlesPage/model/selector/articlesListSelectors";

export interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    `articlesPage/fetchArticlesList`,
    async ({ page = 1 },
      { extra, rejectWithValue, getState },
    ) => {
      try {
        const limit = getArticlesListPageLimit(getState());
        const response = await extra.api.get(`/articles`, {
          params: {
            _expand: `user`,
            _page: page,
            _limit: limit,
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        console.log(e);

        return rejectWithValue(`UnexpectedError`);
      }
    });
