import cls from "./AppText.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = `primary`,
  ERROR = `error`
}

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const AppText = memo(({ className, title, text, theme = TextTheme.PRIMARY }: AppTextProps) => {
  return (
    <div className={classNames(cls.AppText, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

AppText.displayName = `AppText`;
