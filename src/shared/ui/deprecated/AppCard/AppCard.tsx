import { memo } from "react";

import { AppBlock } from "../../AppBlock/AppBlock";
import cls from "./AppCard.module.scss";
import { classNames } from "../../../utils/classNames";

import type { AppBlockProps } from "../../AppBlock/AppBlock";
import type { ReactNode } from "react";

export enum CardTheme {
  NORMAL = `normal`,
  OUTLINE = `outline`,
}

export interface AppCardProps extends AppBlockProps {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

/**
 * @deprecated
 */
export const AppCard = memo(
  ({
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...other
  }: AppCardProps) => {
    return (
      <AppBlock
        {...other}
        className={classNames(cls.AppCard, { [cls.max]: !!max }, [
          className,
          cls[theme],
        ])}
      >
        {children}
      </AppBlock>
    );
  },
);

AppCard.displayName = `AppCard`;
