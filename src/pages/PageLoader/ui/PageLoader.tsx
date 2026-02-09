import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppLoader } from "@/shared/ui/AppLoader";

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
