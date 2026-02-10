import { forwardRef } from "react";

import cls from "./AppFlex.module.scss";
import { classNames } from "../../../utils/classNames";
import { AppBlock } from "../../AppBlock/AppBlock";

import type { ReactNode, ReactElement } from "react";
import type {
  AppBlockProps,
  PolymorphicTag,
  PolymorphicRef,
} from "../../AppBlock/AppBlock";

export type FlexAlign = `start` | `center` | `end`;
export type FlexJustify = `start` | `center` | `end` | `between` | `around`;
export type FlexDirection = "column" | "row";
export type FlexGap = `4` | `8` | `16` | `32`;

const justifyClasses: Record<FlexJustify, string> = {
  start: `justifyStart`,
  center: `justifyCenter`,
  end: `justifyEnd`,
  between: `justifyBetween`,
  around: `justifyAround`,
};

const alignClasses: Record<FlexAlign, string> = {
  start: `alignStart`,
  center: `alignCenter`,
  end: `alignEnd`,
};

const directionClasses: Record<FlexDirection, string> = {
  row: `directionRow`,
  column: `directionColumn`,
};

const gapClasses: Record<FlexGap, string> = {
  4: `gap4`,
  8: `gap8`,
  16: `gap16`,
  32: `gap32`,
};

export type AppFlexProps<Tag extends PolymorphicTag = PolymorphicTag> = Omit<
  AppBlockProps<Tag>,
  | `className`
  | `children`
  | `align`
  | `justifyContent`
  | `direction`
  | `gap`
  | `max`
> & {
  className?: string;
  children?: ReactNode;
  justifyContent?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
};

const AppFlexInternal = forwardRef(
  <Tag extends PolymorphicTag>(
    {
      className,
      children,
      justifyContent = `start`,
      align = `center`,
      direction = `row`,
      gap,
      max,
      ...other
    }: AppFlexProps<Tag>,
    ref: PolymorphicRef<Tag>,
  ) => {
    return (
      <AppBlock
        {...other}
        ref={ref}
        className={classNames(
          cls.AppFlex,
          { [cls[gapClasses[gap ?? `4`]]]: !!gap, [cls.max]: !!max },
          [
            className,
            cls[justifyClasses[justifyContent]],
            cls[alignClasses[align]],
            cls[directionClasses[direction]],
          ],
        )}
      >
        {children}
      </AppBlock>
    );
  },
);

AppFlexInternal.displayName = `AppFlex`;

export const AppFlex = AppFlexInternal as <
  Tag extends PolymorphicTag = PolymorphicTag,
>(
  props: AppFlexProps<Tag> & { ref?: PolymorphicRef<Tag> },
) => ReactElement | null;
