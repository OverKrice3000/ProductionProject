import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";

import { AppSelect as AppSelectDeprecated } from "@/shared/ui/deprecated/AppSelect";
import { classNames } from "@/shared/utils/classNames";
import type { SortOrder } from "@/shared/types/sort";
import type { SelectOption } from "@/shared/ui/deprecated/AppSelect";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppListbox } from "@/shared/ui/redesigned/Popups";
import { AppVStack } from "@/shared/ui/AppStack";
import { AppText } from "@/shared/ui/redesigned/AppText";

import cls from "./ArticleSortSelector.module.scss";
import { ArticleSortField } from "../../model/types/article";

interface ArticleSortSelectorProps {
  className?: string;
  field: ArticleSortField;
  order: SortOrder;
  onChangeField: (field: ArticleSortField) => void;
  onChangeOrder: (field: SortOrder) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    field,
    order,
    onChangeField,
    onChangeOrder,
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation(`articles`);

    const sortOrderOptions = useMemo<Array<SelectOption<SortOrder>>>(
      () => [
        {
          value: `asc`,
          content: t(`Sort.AscLabel`),
        },
        {
          value: `desc`,
          content: t(`Sort.DescLabel`),
        },
      ],
      [t],
    );

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
      () => [
        {
          value: ArticleSortField.CREATED_AT,
          content: t(`Sort.CreatedAt`),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t(`Sort.Views`),
        },
        {
          value: ArticleSortField.TITLE,
          content: t(`Sort.Title`),
        },
      ],
      [t],
    );

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppVStack gap={`8`} className={classNames(``, {}, [className])}>
            <AppText text={t(`SortBy`)} />
            <AppListbox
              value={order}
              onChange={onChangeOrder}
              items={sortOrderOptions}
            />
            <AppListbox
              value={field}
              onChange={onChangeField}
              items={sortFieldOptions}
            />
          </AppVStack>
        }
        off={
          <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <AppSelectDeprecated
              value={order}
              onChange={onChangeOrder}
              label={t(`Sort.OrderLabel`)}
              options={sortOrderOptions}
            />
            <AppSelectDeprecated
              value={field}
              onChange={onChangeField}
              label={t(`Sort.FieldLabel`)}
              options={sortFieldOptions}
              className={cls.order}
            />
          </div>
        }
      />
    );
  },
);

ArticleSortSelector.displayName = `ArticleSortSelector`;
