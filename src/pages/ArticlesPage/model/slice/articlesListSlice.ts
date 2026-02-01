import type { PayloadAction } from "@reduxjs/toolkit";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Article } from "entities/article";
import { ArticleView } from "entities/article";
import type {
  ArticlesListRootSchema,
  ArticlesListSchema,

  ArticleSortField,
} from "pages/ArticlesPage/model/types/articlesList";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from "shared/constants/localStorage";
import {
  articlesFetchNumberByView,
  defaultOrder,
  defaultSortField,
} from "pages/ArticlesPage/model/constants/articlesList";
import type { SortOrder } from "shared/types/sort";

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
    page: 1,
    hasMore: true,
    order: defaultOrder,
    sortField: defaultSortField,
    search: ``,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      state.limit = articlesFetchNumberByView[action.payload];
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSortField: (state, action: PayloadAction<ArticleSortField>) => {
      state.sortField = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = articlesFetchNumberByView[view];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;

      if (action.meta.arg.replace) {
        articlesListAdapter.removeAll(state);
      }
    }).addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      articlesListAdapter.addMany(state, action.payload.articles);
      state.hasMore = action.payload.hasMore;
    }).addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesListActions, reducer: articlesListReducer } = articlesListSlice;
