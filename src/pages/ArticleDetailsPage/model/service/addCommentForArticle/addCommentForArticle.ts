import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthData } from "entities/user";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { AppComment } from "entities/comment";
import { getArticleData } from "entities/article";
import { commentsActions } from "pages/ArticleDetailsPage/model/slice/articleCommentsSlice";

export const addCommentForArticle = createAsyncThunk<AppComment, string, ThunkConfig<string>>(
    `articleDetailsPage/addCommentForArticle`,
    async (text,
      { extra, rejectWithValue, dispatch, getState },
    ) => {
      try {
        const userData = getAuthData(getState());
        const article = getArticleData(getState());

        if (!userData || !text || !article) {
          return rejectWithValue(`NoData`);
        }

        const response = await extra.api.post<AppComment>(`/comments`, {
          articleId: article?.id,
          userId: userData.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(commentsActions.addComment({ ...response.data, user: userData }));

        return response.data;
      } catch (e) {
        console.log(e);

        return rejectWithValue(`UnexpectedError`);
      }
    });
