import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppCard } from "@/shared/ui/deprecated/AppCard";
import { AppInput } from "@/shared/ui/deprecated/AppInput";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { ArticleSortSelector, ArticleTypeTabs } from "@/entities/Article";
import { classNames } from "@/shared/utils/classNames";

import { useArticleFilters } from "../../lib/hooks/useArticleFilters";
import { ViewSelectorContainer } from "../ViewSelectorContainer/ViewSelectorContainer";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation(`articles`);

    const {
      order,
      field,
      search,
      type,
      onChangeSearch,
      onChangeType,
      onChangeSortField,
      onChangeOrder,
    } = useArticleFilters();

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
