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
  S = `size_s`,
  M = `size_m`,
  L = `size_l`
}

const mapSizeToHeaderTag: Record<TextSize, keyof JSX.IntrinsicElements> = {
  [TextSize.S]: `h3`,
  [TextSize.M]: `h2`,
  [TextSize.L]: `h1`,
};

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize;
  align?: TextAlign;
}

export const AppText = memo(({ className, title, text, size = TextSize.M, theme = TextTheme.PRIMARY, align = TextAlign.LEFT }: AppTextProps) => {
  const Header = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.AppText, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <Header className={cls.title}>{title}</Header>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

AppText.displayName = `AppText`;
