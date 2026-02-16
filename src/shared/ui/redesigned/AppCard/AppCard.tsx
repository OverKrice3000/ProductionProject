import { memo } from "react";

import { AppFlex } from "../../AppStack/appFlex/AppFlex";
import cls from "./AppCard.module.scss";
import { classNames } from "../../../utils/classNames";

import type { AppFlexProps } from "../../AppStack/appFlex/AppFlex";
import type { ReactNode } from "react";

export type CardVariant = `normal` | `outline` | `light`;
export type CardPadding = `p0` | `p8` | `p16` | `p24`;
export type CardBorder = `borderNormal` | `borderRound`;

export interface AppCardProps extends AppFlexProps {
  className?: string;
  children?: ReactNode;
  variant?: CardVariant;
  border?: CardBorder;
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
    border = `borderNormal`,
    direction = `column`,
    align = `start`,
    ...other
  }: AppCardProps) => {
    return (
      <AppFlex
        {...other}
        align={align}
        direction={direction}
        className={classNames(``, { [cls.max]: !!max }, [
          className,
          cls[variant],
          cls[p],
          cls[border],
        ])}
      >
        {children}
      </AppFlex>
    );
  },
);

AppCard.displayName = `AppCard`;
