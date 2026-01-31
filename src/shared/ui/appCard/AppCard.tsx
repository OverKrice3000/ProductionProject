import cls from "./AppCard.module.scss";
import { classNames } from "shared/utils/classNames";
import type { HTMLAttributes, ReactNode } from "react";
import { memo } from "react";

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const AppCard = memo(({ className, children, ...other }: AppCardProps) => {
  return (
        <div className={classNames(cls.AppCard, {}, [className])} {...other}>
          {children}
        </div>
  );
});

AppCard.displayName = `AppCard`;
