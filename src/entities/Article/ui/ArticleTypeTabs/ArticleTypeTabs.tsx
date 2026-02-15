import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";

import { AppTabs as AppTabsDeprecated } from "@/shared/ui/deprecated/AppTabs";
import { ObjectTyped } from "@/shared/utils/utils";
import { classNames } from "@/shared/utils/classNames";
import type { TabItem } from "@/shared/ui/deprecated/AppTabs";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppTabs } from "@/shared/ui/redesigned/AppTabs";

import { ArticleType } from "../../model/types/article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChange: (value: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  ({ className, value, onChange }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<Array<TabItem<ArticleType>>>(
      () => [
        ...ObjectTyped.keys(ArticleType).map((type) => ({
          value: ArticleType[type],
          content: t(ArticleType[type]),
        })),
      ],
      [t],
    );

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppTabs
            align={`start`}
            direction={`column`}
            gap={`8`}
            tabs={typeTabs}
            value={value}
            onTabClick={onChange}
            className={classNames(``, {}, [className])}
          />
        }
        off={
          <AppTabsDeprecated
            tabs={typeTabs}
            value={value}
            onTabClick={onChange}
            className={classNames(``, {}, [className])}
          />
        }
      />
    );
  },
);

ArticleTypeTabs.displayName = `ArticleTypeTabs`;
