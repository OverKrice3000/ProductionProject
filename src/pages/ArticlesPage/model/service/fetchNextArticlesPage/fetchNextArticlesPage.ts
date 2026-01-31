import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import {
  getArticlesListIsLoading,
  getArticlesListPageHasMore,
  getArticlesListPageNumber,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { articlesListActions } from "pages/ArticlesPage/model/slice/articlesListSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    `articlesPage/fetchNextArticlesPage`,
    async (_,
      { getState, dispatch },
    ) => {
      const hasMore = getArticlesListPageHasMore(getState());
      const page = getArticlesListPageNumber(getState());
      const isLoading = getArticlesListIsLoading(getState());

      if (hasMore && !isLoading) {
        dispatch(articlesListActions.setPage(page + 1));
        dispatch(fetchArticlesList({
          page: page + 1,
        }));
      }
    });
