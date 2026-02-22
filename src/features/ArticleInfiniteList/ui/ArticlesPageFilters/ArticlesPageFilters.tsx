import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { AppCard } from "@/shared/ui/deprecated/AppCard";
import { AppInput } from "@/shared/ui/deprecated/AppInput";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import type { ArticleType, ArticleSortField } from "@/entities/Article";
import { ArticleSortSelector, ArticleTypeTabs } from "@/entities/Article";
import { classNames } from "@/shared/utils/classNames";
import type { SortOrder } from "@/shared/types/sort";
import { useDebounce } from "@/shared/utils/hooks/useDebounce";

import { ViewSelectorContainer } from "../ViewSelectorContainer/ViewSelectorContainer";
import { articlesListActions } from "../../model/slice/articlesListSlice/articlesListSlice";
import { articlesFetchDebounceDelay } from "../../lib/articlesList";
import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSortField,
  getArticlesListType,
} from "../../model/selector/articlesListSelectors";
import { fetchArticlesList } from "../../model/service/fetchArticlesList/fetchArticlesList";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation(`articles`);

    const order = useSelector(getArticlesListOrder);
    const field = useSelector(getArticlesListSortField);
    const search = useSelector(getArticlesListSearch);
    const type = useSelector(getArticlesListType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const fetchDataDebounced = useDebounce(
      fetchData,
      articlesFetchDebounceDelay,
    );

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

    return (
      <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
        <AppHStack max className={cls.sortWrapper}>
          <ArticleSortSelector
            field={field}
            order={order}
            onChangeField={onChangeSortField}
            onChangeOrder={onChangeOrder}
          />
          <ViewSelectorContainer />
        </AppHStack>
        <AppCard className={cls.search}>
          <AppInput
            role="search"
            placeholder={t(`Search`)}
            value={search}
            onChange={onChangeSearch}
          />
        </AppCard>
        <ArticleTypeTabs value={type} onChange={onChangeType} />
      </AppVStack>
    );
  },
);

ArticlesPageFilters.displayName = `ArticlesPageFilters`;
