import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import type { TabItem } from "shared/ui/appTabs/AppTabs";
import { AppTabs } from "shared/ui/appTabs/AppTabs";
import { ArticleType } from "../..";
import { ObjectTyped } from "shared/utils/utils";
import { classNames } from "shared/utils/classNames";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChange: (value: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ className, value, onChange }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => ([
    ...ObjectTyped.keys(ArticleType).map((type) => ({
      value: ArticleType[type],
      content: t(ArticleType[type]),
    })),
  ]), [t]);

  return (
      <AppTabs tabs={typeTabs} value={value} onTabClick={onChange} className={classNames(``, {}, [className])} />
  );
});

ArticleTypeTabs.displayName = `ArticleTypeTabs`;
