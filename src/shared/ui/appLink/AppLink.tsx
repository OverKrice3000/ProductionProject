import cls from "./AppLink.module.scss";
import { classNames } from "@/shared/utils/classNames";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { forwardRef, memo } from "react";

export enum AppLinkTheme {
  PRIMARY = `primary`,
  INVERTED = `inverted`
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo(forwardRef<HTMLAnchorElement, AppLinkProps>(({ className, theme = AppLinkTheme.PRIMARY, children, ...otherProps }, ref) => {
  return (
      <Link ref={ref} {...otherProps} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
        {children}
      </Link>
  );
}));

AppLink.displayName = `AppLink`;
