import cls from "./AppCard.module.scss";
import { classNames } from "@/shared/utils/classNames";
import type { HTMLAttributes, ReactNode } from "react";
import { memo } from "react";

export enum CardTheme {
  NORMAL = `normal`,
  OUTLINE = `outline`
}

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
  as?: `div` | `article`;
}

export const AppCard = memo(({ className, children, theme = CardTheme.NORMAL, as = `div`, ...other }: AppCardProps) => {
  const Tag = as;

  return (
        <Tag className={classNames(cls.AppCard, {}, [className, cls[theme]])} {...other}>
          {children}
        </Tag>
  );
});

AppCard.displayName = `AppCard`;
