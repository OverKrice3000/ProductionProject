import cls from "./ArticlesPageFilters.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  getArticlesListOrder, getArticlesListSearch,
  getArticlesListSortField,
  getArticlesListView,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { type ArticleView, ArticleViewSelector, ArticleSortSelector } from "entities/article";
import { articlesListActions } from "pages/ArticlesPage/model/slice/articlesListSlice";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useTranslation } from "react-i18next";
import { AppCard } from "shared/ui/appCard/AppCard";
import { AppInput } from "shared/ui/appInput/AppInput";
import type { SortOrder } from "shared/types/sort";
import type { ArticleSortField } from "pages/ArticlesPage/model/types/articlesList";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/utils/hooks/useDebounce";
import { articlesFetchDebounceDelay } from "pages/ArticlesPage/model/constants/articlesList";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const view = useSelector(getArticlesListView);
  const order = useSelector(getArticlesListOrder);
  const field = useSelector(getArticlesListSortField);
  const search = useSelector(getArticlesListSearch);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const fetchDataDebounced = useDebounce(fetchData, articlesFetchDebounceDelay);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesListActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesListActions.setOrder(order));
    dispatch(articlesListActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSortField = useCallback((sortField: ArticleSortField) => {
    dispatch(articlesListActions.setSortField(sortField));
    dispatch(articlesListActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesListActions.setSearch(search));
    dispatch(articlesListActions.setPage(1));
    fetchDataDebounced();
  }, [dispatch, fetchDataDebounced]);

  return (
        <div className={classNames(``, {}, [className])}>
          <div className={cls.sortWrapper}>
            <ArticleSortSelector field={field} order={order} onChangeField={onChangeSortField} onChangeOrder={onChangeOrder} />
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
          </div>
          <AppCard className={cls.search}>
            <AppInput placeholder={t(`Search`)} value={search} onChange={onChangeSearch} />
          </AppCard>
        </div>
  );
});

ArticlesPageFilters.displayName = `ArticlesPageFilters`;
