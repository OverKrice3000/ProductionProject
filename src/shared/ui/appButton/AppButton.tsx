import cls from "./AppButton.module.scss";
import { classNames } from "shared/utils/classNames";
import React from "react";

export enum AppButtonTheme {
  CLEAR = `clear`
}

interface AppButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  className?: string;
  theme?: AppButtonTheme;
}

export const AppButton = (props: React.PropsWithChildren<AppButtonProps>) => {
  const { className, children, theme = AppButtonTheme.CLEAR, ...otherProps } = props;
  return (
      <button {...otherProps} className={classNames(cls.appButton, {}, [className, cls[theme]])} type="button">
        {children}
      </button>
  );
};
