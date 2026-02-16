import { memo } from "react";

import cls from "./AppText.module.scss";
import { classNames } from "../../../utils/classNames";

import type { JSX, HTMLProps } from "react";

export type TextVariant = `primary` | `error` | `accent`;

export type TextAlign = "left" | "center" | "right";

export type TextSize = `size_s` | `size_m` | `size_l`;

const mapSizeToHeaderTag: Record<TextSize, keyof JSX.IntrinsicElements> = {
  size_s: `h3`,
  size_m: `h2`,
  size_l: `h1`,
};

interface AppTextProps extends Omit<HTMLProps<HTMLDivElement>, `size`> {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  size?: TextSize;
  bold?: boolean;
  align?: TextAlign;
}

export const AppText = memo(
  ({
    className,
    title,
    text,
    size = `size_m`,
    variant = `primary`,
    align = `left`,
    bold,
    ...other
  }: AppTextProps) => {
    const Header = mapSizeToHeaderTag[size];

    return (
      <div
        {...other}
        className={classNames(cls.AppText, { [cls.bold]: !!bold }, [
          className,
          cls[variant],
          cls[align],
          cls[size],
        ])}
      >
        {title && <Header className={cls.title}>{title}</Header>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  },
);

AppText.displayName = `AppText`;
