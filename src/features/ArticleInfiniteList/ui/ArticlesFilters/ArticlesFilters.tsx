import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import { AppCard } from "@/shared/ui/redesigned/AppCard";
import {
  type ArticleSortField,
  ArticleSortSelector,
  type ArticleType,
  ArticleTypeTabs,
} from "@/entities/Article";
import { AppVStack } from "@/shared/ui/AppStack";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { classNames } from "@/shared/utils/classNames";
import { useDebounce } from "@/shared/utils/hooks/useDebounce";
import type { SortOrder } from "@/shared/types/sort";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import SearchIcon from "@/shared/assets/icons/redesigned/search.svg";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

import cls from "./ArticlesFilters.module.scss";
import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSortField,
  getArticlesListType,
} from "../../model/selector/articlesListSelectors";
import { fetchArticlesList } from "../../model/service/fetchArticlesList/fetchArticlesList";
import { articlesFetchDebounceDelay } from "../../lib/articlesList";
import { articlesListActions } from "../../model/slice/articlesListSlice/articlesListSlice";

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(`articles`);

  const order = useSelector(getArticlesListOrder);
  const field = useSelector(getArticlesListSortField);
  const search = useSelector(getArticlesListSearch);
  const type = useSelector(getArticlesListType);

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

  return (
    <AppCard
      className={classNames(cls.ArticlesFilters, {}, [className])}
      max
      p={`p24`}
    >
      <AppVStack gap={`32`}>
        <AppInput
          role="search"
          size={`size_s`}
          placeholder={t(`Search`)}
          value={search}
          onChange={onChangeSearch}
          addonLeft={
            <AppIcon
              color={`inherit`}
              width={32}
              height={32}
              Svg={SearchIcon}
            />
          }
        />
        <ArticleTypeTabs value={type} onChange={onChangeType} />
        <ArticleSortSelector
          field={field}
          order={order}
          onChangeField={onChangeSortField}
          onChangeOrder={onChangeOrder}
        />
      </AppVStack>
    </AppCard>
  );
});

ArticlesFilters.displayName = `ArticlesFilters`;
