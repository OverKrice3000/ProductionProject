import { useSelector } from "react-redux";
import { useCallback, useMemo } from "react";

import { useDebounce } from "@/shared/utils/hooks/useDebounce";
import type {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "@/entities/Article";
import type { SortOrder } from "@/shared/types/sort";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";

import { articlesListActions } from "../../model/slice/articlesListSlice/articlesListSlice";
import { articlesFetchDebounceDelay } from "../articlesList";
import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSortField,
  getArticlesListType,
  getArticlesListView,
} from "../../model/selector/articlesListSelectors";
import { fetchArticlesList } from "../../model/service/fetchArticlesList/fetchArticlesList";

export const useArticleFilters = () => {
  const dispatch = useAppDispatch();

  const order = useSelector(getArticlesListOrder);
  const field = useSelector(getArticlesListSortField);
  const search = useSelector(getArticlesListSearch);
  const type = useSelector(getArticlesListType);
  const view = useSelector(getArticlesListView);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const fetchDataDebounced = useDebounce(fetchData, articlesFetchDebounceDelay);

  const onChangeType = useCallback(
    (type: ArticleType) => {
      dispatch(articlesListActions.setType(type));
      dispatch(articlesListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesListActions.setOrder(order));
      dispatch(articlesListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSortField = useCallback(
    (sortField: ArticleSortField) => {
      dispatch(articlesListActions.setSortField(sortField));
      dispatch(articlesListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesListActions.setSearch(search));
      dispatch(articlesListActions.setPage(1));
      fetchDataDebounced();
    },
    [dispatch, fetchDataDebounced],
  );

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesListActions.setView(view));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      order,
      field,
      search,
      type,
      view,
      onChangeOrder,
      onChangeSortField,
      onChangeSearch,
      onChangeType,
      onChangeView,
    }),
    [
      field,
      onChangeOrder,
      onChangeSearch,
      onChangeSortField,
      onChangeType,
      onChangeView,
      order,
      search,
      type,
      view,
    ],
  );
};
