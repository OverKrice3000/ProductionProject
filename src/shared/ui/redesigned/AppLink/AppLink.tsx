import { NavLink } from "react-router-dom";
import { forwardRef, memo } from "react";

import cls from "./AppLink.module.scss";
import { classNames } from "../../../utils/classNames";

import type { LinkProps } from "react-router-dom";
import type { ReactNode } from "react";

export type AppLinkVariant = `primary` | `red`;

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo(
  forwardRef<HTMLAnchorElement, AppLinkProps>(
    (
      {
        className,
        variant = `primary`,
        children,
        activeClassName = ``,
        ...otherProps
      },
      ref,
    ) => {
      return (
        <NavLink
          ref={ref}
          {...otherProps}
          className={({ isActive }) =>
            classNames(cls.appLink, { [activeClassName]: isActive }, [
              className,
              cls[variant],
            ])
          }
        >
          {children}
        </NavLink>
      );
    },
  ),
);

AppLink.displayName = `AppLink`;
