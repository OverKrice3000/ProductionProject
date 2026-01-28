import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { AppSkeleton } from "shared/ui/appSkeleton/AppSkeleton";

interface ArticleDetailsContentLoadingProps {
  className?: string;
}

export const ArticleDetailsContentLoading = memo(({ className }: ArticleDetailsContentLoadingProps) => {
  return (
    <div className={classNames(``, {}, [className])}>
      <AppSkeleton className={cls.avatar} width={200} height={200} borderRadius={`50%`} />
      <AppSkeleton className={cls.title} width={300} height={32} />
      <AppSkeleton className={cls.skeleton} width={600} height={24} />
      <AppSkeleton className={cls.skeleton} width={`100%`} height={200} />
      <AppSkeleton className={cls.skeleton} width={`100%`} height={200} />
    </div>
  );
});

ArticleDetailsContentLoading.displayName = `ArticleDetailsContentLoading`;
