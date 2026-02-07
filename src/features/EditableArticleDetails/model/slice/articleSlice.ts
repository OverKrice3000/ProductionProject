import { createSlice } from '@reduxjs/toolkit';
import type { ArticleSchema } from "entities/Article/model/types/article";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

const initialState: ArticleSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const articleSlice = createSlice({
  name: `article`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    }).addCase(fetchArticleById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    }).addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleActions, reducer: articleReducer } = articleSlice;
