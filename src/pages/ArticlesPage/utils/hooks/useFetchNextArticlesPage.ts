import {
  getArticlesListIsLoading,
  getArticlesListPageHasMore,
  getArticlesListPageNumber,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { articlesListActions } from "pages/ArticlesPage/model/slice/articlesListSlice/articlesListSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useCallback } from "react";
import { useAppStore } from "shared/utils/hooks/useAppStore";

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
