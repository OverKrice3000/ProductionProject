import cls from "./AppLink.module.scss";
import { classNames } from "shared/utils/classNames";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { memo } from "react";

export enum AppLinkTheme {
  PRIMARY = `primary`,
  INVERTED = `inverted`
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo(({ className, theme = AppLinkTheme.PRIMARY, children, ...otherProps }: React.PropsWithChildren<AppLinkProps>) => {
  return (
      <Link {...otherProps} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
        {children}
      </Link>
  );
});

AppLink.displayName = `AppLink`;
