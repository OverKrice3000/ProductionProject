import cls from "./AppText.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = `primary`,
  INVERTED = `inverted`,
  ERROR = `error`
}

export enum TextAlign {
  RIGHT = `right`,
  CENTER = `center`,
  LEFT = `left`
}

export enum TextSize {
  M = `size_m`,
  L = `size_l`
}

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize;
  align?: TextAlign;
}

export const AppText = memo(({ className, title, text, size = TextSize.M, theme = TextTheme.PRIMARY, align = TextAlign.LEFT }: AppTextProps) => {
  return (
    <div className={classNames(cls.AppText, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

AppText.displayName = `AppText`;
