import cls from "./AppSkeleton.module.scss";
import { classNames } from "@/shared/utils/classNames";
import type { CSSProperties } from "react";
import { memo } from "react";

interface AppSkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const AppSkeleton = memo(({ className, height, width, borderRadius }: AppSkeletonProps) => {
  const style: CSSProperties = {
    width, height, borderRadius,
  };

  return (
        <div className={classNames(cls.AppSkeleton, {}, [className])} style={style}>

        </div>
  );
});

AppSkeleton.displayName = `AppSkeleton`;
