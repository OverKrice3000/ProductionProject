import cls from "./AppButton.module.scss";
import { classNames } from "shared/utils/classNames";
import React from "react";

export enum AppButtonTheme {
  DEFAULT = `default`,
  CLEAR = `clear`,
  OUTLINE = `outline`,
  BACKGROUND = `background`,
  BACKGROUND_INVERTED = `backgroundInverted`
}

export enum AppButtonSize {
  M = `size_m`,
  L = `size_l`,
  XL = `size_xl`
}

interface AppButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  className?: string;
  theme?: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
}

export const AppButton = (props: React.PropsWithChildren<AppButtonProps>) => {
  const { className, children, theme = AppButtonTheme.DEFAULT, square, size = AppButtonSize.M, ...otherProps } = props;
  const themeClass = theme === AppButtonTheme.DEFAULT ? `` : cls[theme];

  return (
      <button {...otherProps} className={classNames(cls.appButton, { [cls.square]: !!square }, [className, themeClass, cls[size]])} type="button">
        {children}
      </button>
  );
};
