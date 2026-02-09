import { useCallback } from "react";

import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { useAppStore } from "@/shared/utils/hooks/useAppStore";

import {
  getArticlesListIsLoading,
  getArticlesListPageHasMore,
  getArticlesListPageNumber,
} from "../../model/selector/articlesListSelectors";
import { articlesListActions } from "../../model/slice/articlesListSlice/articlesListSlice";
import { fetchArticlesList } from "../../model/service/fetchArticlesList/fetchArticlesList";

export const useFetchNextArticlesPage = () => {
  const dispatch = useAppDispatch();

  const store = useAppStore();

  return useCallback(async () => {
    const state = store.getState();
    const hasMore = getArticlesListPageHasMore(state);
    const page = getArticlesListPageNumber(state);
    const isLoading = getArticlesListIsLoading(state);

    if (hasMore && !isLoading) {
      dispatch(articlesListActions.setPage(page + 1));
      await dispatch(fetchArticlesList({}));
    }
  }, [dispatch, store]);
};
