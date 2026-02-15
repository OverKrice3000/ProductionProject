import { memo } from "react";

import { AppBlock } from "../../AppBlock/AppBlock";
import cls from "./AppCard.module.scss";
import { classNames } from "../../../utils/classNames";

import type { AppBlockProps } from "../../AppBlock/AppBlock";
import type { ReactNode } from "react";

export type CardVariant = `normal` | `outline` | `light`;
export type CardPadding = `p0` | `p8` | `p16` | `p24`;

export interface AppCardProps extends AppBlockProps {
  className?: string;
  children?: ReactNode;
  variant?: CardVariant;
  p?: CardPadding;
  max?: boolean;
}

export const AppCard = memo(
  ({
    className,
    children,
    p = `p8`,
    variant = `normal`,
    max,
    ...other
  }: AppCardProps) => {
    return (
      <AppBlock
        {...other}
        className={classNames(cls.AppCard, { [cls.max]: !!max }, [
          className,
          cls[variant],
          cls[p],
        ])}
      >
        {children}
      </AppBlock>
    );
  },
);

AppCard.displayName = `AppCard`;
