import cls from "./AppCard.module.scss";
import { classNames } from "shared/utils/classNames";
import type { HTMLAttributes, ReactNode } from "react";
import { memo } from "react";

export enum CardTheme {
  NORMAL = `normal`,
  OUTLINE = `outline`
}

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
}

export const AppCard = memo(({ className, children, theme = CardTheme.NORMAL, ...other }: AppCardProps) => {
  return (
        <div className={classNames(cls.AppCard, {}, [className, cls[theme]])} {...other}>
          {children}
        </div>
  );
});

AppCard.displayName = `AppCard`;
