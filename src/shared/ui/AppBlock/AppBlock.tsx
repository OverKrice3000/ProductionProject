import { forwardRef } from "react";

import { classNames } from "../../utils/classNames";

import type { ReactNode, HTMLAttributes } from "react";

export interface AppBlockProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  `ref`
> {
  className?: string;
  as?:
    | `div`
    | `article`
    | `main`
    | `header`
    | `footer`
    | `nav`
    | `section`
    | `aside`;
  children?: ReactNode;
}

export const AppBlock = forwardRef<HTMLDivElement, AppBlockProps>(
  ({ className, children, as = `div`, ...other }: AppBlockProps, ref) => {
    const Tag = as;

    return (
      <Tag {...other} ref={ref} className={classNames(``, {}, [className])}>
        {children}
      </Tag>
    );
  },
);

AppBlock.displayName = `AppBlock`;
