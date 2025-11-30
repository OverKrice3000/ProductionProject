import cls from "./AppButton.module.scss";
import { classNames } from "shared/utils/classNames";
import React from "react";

export enum AppButtonTheme {
  DEFAULT = `default`,
  CLEAR = `clear`,
  OUTLINE = `outline`
}

interface AppButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  className?: string;
  theme?: AppButtonTheme;
}

export const AppButton = (props: React.PropsWithChildren<AppButtonProps>) => {
  const { className, children, theme = AppButtonTheme.DEFAULT, ...otherProps } = props;
  const themeClass = theme === AppButtonTheme.DEFAULT ? `` : cls[theme];

  return (
      <button {...otherProps} className={classNames(cls.appButton, {}, [className, themeClass])} type="button">
        {children}
      </button>
  );
};
