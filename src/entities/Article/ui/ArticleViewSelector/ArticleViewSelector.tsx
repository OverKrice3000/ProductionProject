import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/utils/classNames";
import ListIcon from "@/shared/assets/icons/articlesViewList.svg";
import PlateIcon from "@/shared/assets/icons/articlesViewPlate.svg";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton";
import { AppIcon } from "@/shared/ui/AppIcon";

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
    icon: PlateIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation(`article`);

    const onClick = (view: ArticleView) => () => {
      onViewClick?.(view);
    };

    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((data, index) => (
          <AppButton
            theme={AppButtonTheme.CLEAR}
            onClick={onClick(data.view)}
            key={index}
            aria-label={`${t(`ChangeArticleViewTo`)}: ${t(data.view)}`}
          >
            <AppIcon
              aria-hidden={true}
              Svg={data.icon}
              className={classNames(
                ``,
                { [cls.notSelected]: data.view !== view },
                [],
              )}
            />
          </AppButton>
        ))}
      </div>
    );
  },
);

ArticleViewSelector.displayName = `ArticleViewSelector`;
