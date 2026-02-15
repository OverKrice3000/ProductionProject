import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppIcon as AppIconDeprecated } from "@/shared/ui/deprecated/AppIcon";
import { classNames } from "@/shared/utils/classNames";
import ListIconDeprecated from "@/shared/assets/icons/articlesViewList.svg";
import PlateIconDeprecated from "@/shared/assets/icons/articlesViewPlate.svg";
import ListIcon from "@/shared/assets/icons/redesigned/burger.svg";
import PlateIcon from "@/shared/assets/icons/redesigned/tile.svg";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppHStack } from "@/shared/ui/AppStack";

import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "../../model/types/article";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: PlateIconDeprecated,
    iconRedesigned: PlateIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIconDeprecated,
    iconRedesigned: ListIcon,
  },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation(`article`);

    const onClick = (view: ArticleView) => () => {
      onViewClick?.(view);
    };

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            border={`borderRound`}
            className={classNames(``, {}, [className])}
          >
            <AppHStack gap="8">
              {viewTypes.map((data, index) => (
                <AppIcon
                  width={24}
                  height={24}
                  aria-hidden={true}
                  Svg={data.iconRedesigned}
                  aria-label={`${t(`ChangeArticleViewTo`)}: ${t(data.view)}`}
                  key={index}
                  clickable
                  onClick={onClick(data.view)}
                  color={data.view === view ? `accent` : `primary`}
                />
              ))}
            </AppHStack>
          </AppCard>
        }
        off={
          <div className={classNames(``, {}, [className])}>
            {viewTypes.map((data, index) => (
              <AppButtonDeprecated
                theme={AppButtonTheme.CLEAR}
                onClick={onClick(data.view)}
                key={index}
                aria-label={`${t(`ChangeArticleViewTo`)}: ${t(data.view)}`}
              >
                <AppIconDeprecated
                  width={24}
                  height={24}
                  aria-hidden={true}
                  Svg={data.icon}
                  className={classNames(
                    ``,
                    { [cls.notSelected]: data.view !== view },
                    [],
                  )}
                />
              </AppButtonDeprecated>
            ))}
          </div>
        }
      />
    );
  },
);

ArticleViewSelector.displayName = `ArticleViewSelector`;
