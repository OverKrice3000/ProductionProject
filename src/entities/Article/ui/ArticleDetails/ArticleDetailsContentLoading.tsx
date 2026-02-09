import cls from "./ArticleDetails.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import { AppSkeleton } from "@/shared/ui/AppSkeleton";
import { AppVStack } from "@/shared/ui/AppStack";

interface ArticleDetailsContentLoadingProps {
  className?: string;
}

export const ArticleDetailsContentLoading = memo(({ className }: ArticleDetailsContentLoadingProps) => {
  return (
    <AppVStack max gap={`16`} className={classNames(``, {}, [className])}>
      <AppSkeleton className={cls.avatar} width={200} height={200} borderRadius={`50%`} />
      <AppSkeleton width={300} height={32} />
      <AppSkeleton width={600} height={24} />
      <AppSkeleton width={`100%`} height={200} />
      <AppSkeleton width={`100%`} height={200} />
    </AppVStack>
  );
});

ArticleDetailsContentLoading.displayName = `ArticleDetailsContentLoading`;
