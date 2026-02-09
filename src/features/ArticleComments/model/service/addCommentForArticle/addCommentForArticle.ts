import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAuthData } from "@/entities/User";
import type { ThunkConfig } from "@/app/providers/StateProvider";
import type { AppComment } from "@/entities/Comment";

import { commentsActions } from "../../slice/articleCommentsSlice/articleCommentsSlice";

export interface AddCommentForArticleProps {
  text: string;
  articleId?: string;
}

export const addCommentForArticle = createAsyncThunk<
  AppComment,
  AddCommentForArticleProps,
  ThunkConfig<string>
>(
  `ArticleComments/addCommentForArticle`,
  async (
    { text, articleId },
    { extra, rejectWithValue, dispatch, getState },
  ) => {
    try {
      const userData = getAuthData(getState());

      if (!userData || !text || !articleId) {
        return rejectWithValue(`NoData`);
      }

      const response = await extra.api.post<AppComment>(`/comments`, {
        articleId,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(
        commentsActions.addComment({
          ...response.data,
          user: userData,
        }),
      );

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`UnexpectedError`);
    }
  },
);
