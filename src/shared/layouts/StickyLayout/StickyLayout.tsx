import { classNames } from "../../utils/classNames";
import cls from "./StickyLayout.module.scss";

import type { ReactElement } from "react";

interface StickyLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyLayout = ({
  className,
  left,
  content,
  right,
}: StickyLayoutProps) => {
  return (
    <div className={classNames(cls.StickyLayout, {}, [className])}>
      {left && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.right}>{right}</div>}
    </div>
  );
};
