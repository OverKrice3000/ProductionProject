import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Article } from "entities/article";
import type {
  ArticleRecommendationsRootSchema,
  ArticleRecommendationsSchema,
} from "../../types/articleRecommendationsSchema";
import {
  fetchArticleRecommendations,
} from "../../service/fetchArticleRecommentations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getRecommendations = recommendationsAdapter.getSelectors<ArticleRecommendationsRootSchema>(
  (state) => state.recommendations ?? recommendationsAdapter.getInitialState(),
);

const recommendationsSlice = createSlice({
  name: `articleRecommendations`,
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    entities: {},
    ids: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    }).addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      recommendationsAdapter.setAll(state, action.payload);
    }).addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: recommendationsActions, reducer: recommendationsReducer } = recommendationsSlice;
