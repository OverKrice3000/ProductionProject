import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { AppComment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<AppComment[], string | undefined, ThunkConfig<string>>(
    `comments/fetchCommentsByArticleId`,
    async (articleId,
      { extra, rejectWithValue },
    ) => {
      try {
        if (!articleId) {
          return rejectWithValue(`NoArticleIdProvided`);
        }

        const response = await extra.api.get<AppComment[]>(`/comments/`, {
          params: {
            articleId,
            _expand: `user`,
          },
        });

        if (!response.data) {
          return rejectWithValue(`CommentsLoadingError`);
        }

        return response.data;
      } catch (e) {
        console.log(e);

        return rejectWithValue(`CommentsLoadingError`);
      }
    });
