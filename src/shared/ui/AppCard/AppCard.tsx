import { memo } from "react";

import cls from "./AppCard.module.scss";
import { classNames } from '../../utils/classNames';

import type { HTMLAttributes, ReactNode } from "react";

export enum CardTheme {
  NORMAL = `normal`,
  OUTLINE = `outline`
}

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
  as?: `div` | `article`;
  max?: boolean;
}

export const AppCard = memo(({ className, children, theme = CardTheme.NORMAL, as = `div`, max, ...other }: AppCardProps) => {
  const Tag = as;

  return (
        <Tag className={classNames(cls.AppCard, { [cls.max]: !!max }, [className, cls[theme]])} {...other}>
          {children}
        </Tag>
  );
});

AppCard.displayName = `AppCard`;
