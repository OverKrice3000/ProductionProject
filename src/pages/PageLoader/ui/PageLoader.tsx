import { memo } from "react";

import { AppLoader } from "@/shared/ui/deprecated/AppLoader";
import { classNames } from "@/shared/utils/classNames";

import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <AppLoader />
    </div>
  );
});

PageLoader.displayName = `PageLoader`;
