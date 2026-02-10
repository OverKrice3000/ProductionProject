import { forwardRef } from "react";

import { classNames } from "../../utils/classNames";

import type {
  ReactNode,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ReactElement,
  ElementType,
} from "react";

export type PolymorphicTag =
  | `div`
  | `article`
  | `main`
  | `header`
  | `footer`
  | `nav`
  | `section`
  | `aside`
  | `ul`
  | `li`
  | `form`;
export type PolymorphicRef<T extends PolymorphicTag> =
  ComponentPropsWithRef<T>["ref"];

export type AppBlockProps<Tag extends PolymorphicTag = PolymorphicTag> = Omit<
  ComponentPropsWithoutRef<Tag>,
  `as` | `className` | `children`
> & {
  className?: string;
  as?: Tag;
  children?: ReactNode;
};

const AppBlockInternal = forwardRef(
  <Tag extends PolymorphicTag = `div`>(
    { className, children, as, ...other }: AppBlockProps<Tag>,
    ref: PolymorphicRef<Tag>,
  ) => {
    const TagComponent = (as ?? `div`) as ElementType;

    return (
      <TagComponent
        {...other}
        ref={ref}
        className={classNames(``, {}, [className])}
      >
        {children}
      </TagComponent>
    );
  },
);

AppBlockInternal.displayName = `AppBlock`;

export const AppBlock = AppBlockInternal as <
  Tag extends PolymorphicTag = PolymorphicTag,
>(
  props: AppBlockProps<Tag> & { ref?: PolymorphicRef<Tag> },
) => ReactElement | null;
