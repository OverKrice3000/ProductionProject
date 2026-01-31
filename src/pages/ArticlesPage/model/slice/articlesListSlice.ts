import type { PayloadAction } from "@reduxjs/toolkit";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Article } from "entities/article";
import { ArticleView } from "entities/article";
import type { ArticlesListRootSchema, ArticlesListSchema } from "pages/ArticlesPage/model/types/articlesList";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from "shared/constants/localStorage";

const articlesListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticlesList = articlesListAdapter.getSelectors<ArticlesListRootSchema>(
  (state) => state.articlesList ?? articlesListAdapter.getInitialState(),
);

const articlesListSlice = createSlice({
  name: `articlesList`,
  initialState: articlesListAdapter.getInitialState<ArticlesListSchema>({
    entities: {},
    ids: [],
    isLoading: false,
    view: ArticleView.PLATE,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    }).addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      articlesListAdapter.setAll(state, action.payload);
    }).addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesListActions, reducer: articlesListReducer } = articlesListSlice;
