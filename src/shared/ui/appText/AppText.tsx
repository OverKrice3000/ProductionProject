import cls from "./AppText.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = `primary`,
  ERROR = `error`
}

export enum TextAlign {
  RIGHT = `right`,
  CENTER = `center`,
  LEFT = `left`
}

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const AppText = memo(({ className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT }: AppTextProps) => {
  return (
    <div className={classNames(cls.AppText, {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

AppText.displayName = `AppText`;
