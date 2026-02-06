import cls from "./ArticleSortSelector.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useMemo } from "react";
import type { SelectOption } from "shared/ui/appSelect/AppSelect";
import { AppSelect } from "shared/ui/appSelect/AppSelect";
import { ArticleSortField } from "pages/ArticlesPage/model/types/articlesList";
import type { SortOrder } from "shared/types/sort";

interface ArticleSortSelectorProps {
  className?: string;
  field: ArticleSortField;
  order: SortOrder;
  onChangeField: (field: ArticleSortField) => void;
  onChangeOrder: (field: SortOrder) => void;
}

export const ArticleSortSelector = memo(({ className, field, order, onChangeField, onChangeOrder }: ArticleSortSelectorProps) => {
  const { t } = useTranslation(`article`);

  const sortOrderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: `asc`,
      content: t(`Sort.AscLabel`),
    },
    {
      value: `desc`,
      content: t(`Sort.DescLabel`),
    },
  ], [t]);

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
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
  ], [t]);

  return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <AppSelect value={order} onChange={onChangeOrder} label={t(`Sort.OrderLabel`)} options={sortOrderOptions} />
          <AppSelect value={field} onChange={onChangeField} label={t(`Sort.FieldLabel`)} options={sortFieldOptions} className={cls.order} />
        </div>
  );
});

ArticleSortSelector.displayName = `ArticleSortSelector`;
