import cls from "./AppButton.module.scss";
import { classNames } from "shared/utils/classNames";
import type { ButtonHTMLAttributes } from "react";
import React from "react";
import type { Write } from "shared/types/types";

export enum AppButtonTheme {
  DEFAULT = `default`,
  CLEAR = `clear`,
  CLEAR_INVERTED = `clearInverted`,
  OUTLINE = `outline`,
  BACKGROUND = `background`,
  BACKGROUND_INVERTED = `backgroundInverted`
}

export enum AppButtonSize {
  M = `size_m`,
  L = `size_l`,
  XL = `size_xl`
}

type AppButtonProps = Write<ButtonHTMLAttributes<HTMLButtonElement>, {
  className?: string;
  theme?: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
}>;

export const AppButton = ({ className, children, theme = AppButtonTheme.DEFAULT, square, size = AppButtonSize.M, ...otherProps }: React.PropsWithChildren<AppButtonProps>) => {
  const themeClass = theme === AppButtonTheme.DEFAULT ? `` : cls[theme];

  return (
      <button {...otherProps} className={classNames(cls.appButton, { [cls.square]: !!square }, [className, themeClass, cls[size]])} type="button">
        {children}
      </button>
  );
};
