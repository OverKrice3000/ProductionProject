import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "src/app/providers/StateProvider";
import type { Article } from "../../../../../entities/Article";

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    `article/fetchArticleById`,
    async (articleId,
      { extra, rejectWithValue },
    ) => {
      try {
        if (!articleId) {
          return rejectWithValue(`ArticleLoadingError`);
        }

        const response = await extra.api.get<Article>(`/articles/${articleId}`, {
          params: {
            _expand: `user`,
          },
        });

        if (!response.data) {
          return rejectWithValue(`ArticleLoadingError`);
        }

        return response.data;
      } catch (e) {
        console.log(e);

        return rejectWithValue(`ArticleLoadingError`);
      }
    });
