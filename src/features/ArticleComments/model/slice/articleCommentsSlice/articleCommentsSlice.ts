import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { AppComment } from "@/entities/Comment";

import { fetchCommentsByArticleId } from "../../service/fetchCommentsByArticleId/fetchCommentsByArticleId";

import type {
  ArticleCommentsRootSchema,
  ArticleCommentsSchema,
} from "../../types/articleCommentsSchema";
import type { PayloadAction } from "@reduxjs/toolkit";

const commentsAdapter = createEntityAdapter<AppComment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<ArticleCommentsRootSchema>(
  (state) => state.comments ?? commentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: `comments`,
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    entities: {},
    ids: [],
  }),
  reducers: {
    addComment: (state, action: PayloadAction<AppComment>) => {
      commentsAdapter.addOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    }).addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    }).addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: commentsActions, reducer: commentsReducer } = articleCommentsSlice;
