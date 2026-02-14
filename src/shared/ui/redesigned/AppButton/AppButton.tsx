import React, { memo } from "react";

import cls from "./AppButton.module.scss";
import { classNames } from "../../../utils/classNames";

import type { ButtonHTMLAttributes } from "react";
import type { Write } from "../../../types/types";

export type AppButtonVariant = `outline` | `clear`;

export type AppButtonSize = `size_m` | `size_l` | `size_xl`;

export type AppButtonProps = Write<
  ButtonHTMLAttributes<HTMLButtonElement>,
  {
    className?: string;
    variant?: AppButtonVariant;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
  }
>;

export const AppButton = memo(
  ({
    className,
    children,
    variant = `outline`,
    square,
    size = `size_m`,
    disabled,
    fullWidth,
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
          },
          [className, cls[variant], cls[size]],
        )}
        type="button"
      >
        {children}
      </button>
    );
  },
);

AppButton.displayName = `AppButton`;
