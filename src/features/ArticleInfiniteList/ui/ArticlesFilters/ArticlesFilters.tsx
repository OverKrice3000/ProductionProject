import { useTranslation } from "react-i18next";
import { memo } from "react";

import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { ArticleSortSelector, ArticleTypeTabs } from "@/entities/Article";
import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import SearchIcon from "@/shared/assets/icons/redesigned/search.svg";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

import { useArticleFilters } from "../../lib/hooks/useArticleFilters";
import cls from "./ArticlesFilters.module.scss";

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
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
