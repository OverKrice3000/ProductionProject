import { useCallback } from "react";
import { articlesListActions } from "../../model/slice/articlesListSlice/articlesListSlice";
import { fetchArticlesList } from "../../model/service/fetchArticlesList/fetchArticlesList";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useSearchParams } from "react-router-dom";
import type { SortOrder } from "shared/types/sort";
import type { ArticleSortField } from "../../model/types/articlesList";
import type { ArticleType } from "entities/article";

export const useInitializeArticlesState = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const order = searchParams.get(`order`);
  const field = searchParams.get(`field`);
  const search = searchParams.get(`search`);
  const type = searchParams.get(`type`);

  return useCallback(() => {
    dispatch(articlesListActions.initState());
    order && dispatch(articlesListActions.setOrder(order as SortOrder));
    field && dispatch(articlesListActions.setSortField(field as ArticleSortField));
    search && dispatch(articlesListActions.setSearch(search));
    type && dispatch(articlesListActions.setType(type as ArticleType));
    dispatch(fetchArticlesList({}));
  }, [dispatch, field, order, search, type]);
};
