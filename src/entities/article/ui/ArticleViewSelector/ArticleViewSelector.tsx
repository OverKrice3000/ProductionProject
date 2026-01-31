import cls from "./ArticleViewSelector.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { ArticleView } from "entities/article";
import ListIcon from "shared/assets/icons/articlesViewList.svg";
import PlateIcon from "shared/assets/icons/articlesViewPlate.svg";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { AppIcon } from "shared/ui/appIcon/AppIcon";

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

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  const onClick = (view: ArticleView) => () => {
    onViewClick?.(view);
  };

  return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((data, index) => (
              <AppButton
                  theme={AppButtonTheme.CLEAR}
                  onClick={onClick(data.view)}
                  key={index}>
                <AppIcon Svg={data.icon} className={classNames(``, { [cls.notSelected]: data.view !== view }, [])} />
              </AppButton>
          ))}
        </div>
  );
});

ArticleViewSelector.displayName = `ArticleViewSelector`;
