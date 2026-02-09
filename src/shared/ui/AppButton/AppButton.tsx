import cls from "./AppButton.module.scss";
import { classNames } from '../../utils/classNames';
import type { ButtonHTMLAttributes } from "react";
import React, { memo } from "react";
import type { Write } from '../../types/types';

export enum AppButtonTheme {
  CLEAR = `clear`,
  CLEAR_INVERTED = `clearInverted`,
  OUTLINE = `outline`,
  OUTLINE_RED = `outlineRed`,
  BACKGROUND = `background`,
  BACKGROUND_INVERTED = `backgroundInverted`
}

export enum AppButtonSize {
  M = `size_m`,
  L = `size_l`,
  XL = `size_xl`
}

export type AppButtonProps = Write<ButtonHTMLAttributes<HTMLButtonElement>, {
  className?: string;
  theme?: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}>;

export const AppButton = memo(({ className, children, theme = AppButtonTheme.OUTLINE, square, size = AppButtonSize.M, disabled, fullWidth, ...otherProps }: React.PropsWithChildren<AppButtonProps>) => {
  return (
      <button {...otherProps} className={classNames(cls.appButton, { [cls.square]: !!square, [cls.disabled]: !!disabled, [cls.fullWidth]: !!fullWidth }, [className, cls[theme], cls[size]])} type="button">
        {children}
      </button>
  );
});

AppButton.displayName = `AppButton`;
