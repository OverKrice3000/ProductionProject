import cls from "./PageLoader.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { Loader } from "@/widgets/Loader";
import { memo } from "react";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
      <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
      </div>
  );
});

PageLoader.displayName = `PageLoader`;
