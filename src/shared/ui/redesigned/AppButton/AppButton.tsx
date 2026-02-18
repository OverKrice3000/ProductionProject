import React, { memo } from "react";

import cls from "./AppButton.module.scss";
import { classNames } from "../../../utils/classNames";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import type { Write } from "../../../types/types";

export type AppButtonVariant = `outline` | `clear` | `filled`;
export type AppButtonColor = `normal` | `error` | `success`;

export type AppButtonSize = `size_m` | `size_l` | `size_xl`;

export type AppButtonProps = Write<
  ButtonHTMLAttributes<HTMLButtonElement>,
  {
    className?: string;
    variant?: AppButtonVariant;
    square?: boolean;
    color?: AppButtonColor;
    size?: AppButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
  }
>;

export const AppButton = memo(
  ({
    className,
    children,
    variant = `outline`,
    square,
    color = `normal`,
    size = `size_m`,
    disabled,
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  }: React.PropsWithChildren<AppButtonProps>) => {
    return (
      <button
        {...otherProps}
        className={classNames(
          cls.appButton,
          {
            [cls.square]: !!square,
            [cls.disabled]: !!disabled,
            [cls.fullWidth]: !!fullWidth,
            [cls.withAddon]: !!addonLeft || !!addonRight,
          },
          [className, cls[variant], cls[size], cls[color]],
        )}
        type="button"
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        {children}
        <div className={cls.addonRight}>{addonRight}</div>
      </button>
    );
  },
);

AppButton.displayName = `AppButton`;
