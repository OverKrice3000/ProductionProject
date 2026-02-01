import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Article } from "entities/article";
import type { AxiosResponse } from "axios";

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    `articleDetailsPage/fetchArticleRecommendations`,
    async (_,
      { extra, rejectWithValue },
    ) => {
      try {
        const response = await extra.api.get<Article[], AxiosResponse<Article[]>>(`/articles`, {
          params: {
            _expand: `user`,
            _limit: 4,
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
