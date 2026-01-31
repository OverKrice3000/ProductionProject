import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Article } from "entities/article";

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    `articlesPage/fetchArticlesList`,
    async (_,
      { extra, rejectWithValue },
    ) => {
      try {
        const response = await extra.api.get(`/articles`, {
          params: {
            _expand: `user`,
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
