import { useCallback } from "react";
import { articlesListActions } from "pages/ArticlesPage/model/slice/articlesListSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import type { SortOrder } from "shared/types/sort";
import type { ArticleSortField } from "pages/ArticlesPage/model/types/articlesList";

export const useInitializeArticlesState = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const order = searchParams.get(`order`);
  const field = searchParams.get(`field`);
  const search = searchParams.get(`search`);

  return useCallback(() => {
    dispatch(articlesListActions.initState());
    order && dispatch(articlesListActions.setOrder(order as SortOrder));
    field && dispatch(articlesListActions.setSortField(field as ArticleSortField));
    search && dispatch(articlesListActions.setSearch(search));
    dispatch(fetchArticlesList({}));
  }, [dispatch, field, order, search]);
};
