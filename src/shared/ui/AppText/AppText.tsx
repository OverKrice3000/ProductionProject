import { memo } from "react";

import cls from "./AppText.module.scss";
import { classNames } from '../../utils/classNames';

import type { HTMLProps } from "react";

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

interface AppTextProps extends Omit<HTMLProps<HTMLDivElement>, `size`> {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize;
  align?: TextAlign;
}

export const AppText = memo(({ className, title, text, size = TextSize.M, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, ...other }: AppTextProps) => {
  const Header = mapSizeToHeaderTag[size];

  return (
    <div {...other} className={classNames(cls.AppText, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <Header className={cls.title}>{title}</Header>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

AppText.displayName = `AppText`;
