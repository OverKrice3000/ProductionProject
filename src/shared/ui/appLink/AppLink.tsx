import cls from "./AppLink.module.scss";
import { classNames } from "shared/utils/classNames";
import { Link, LinkProps } from "react-router-dom";
import React from "react";

export enum AppLinkTheme {
  PRIMARY = `primary`,
  SECONDARY = `secondary`
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: React.PropsWithChildren<AppLinkProps>) => {
  const { className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props;
  return (
      <Link {...otherProps} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
        {children}
      </Link>
  );
};
