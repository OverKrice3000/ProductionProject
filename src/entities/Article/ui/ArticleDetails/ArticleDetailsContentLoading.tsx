import { memo } from "react";

import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";

import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsContentLoadingProps {
  className?: string;
}

export const ArticleDetailsContentLoading = memo(
  ({ className }: ArticleDetailsContentLoadingProps) => {
    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppVStack max gap={`16`} className={classNames(``, {}, [className])}>
            <AppSkeleton
              className={cls.avatar}
              width={200}
              height={200}
              borderRadius={`50%`}
            />
            <AppSkeleton width={300} height={32} />
            <AppSkeleton width={600} height={24} />
            <AppSkeleton width={`100%`} height={200} />
            <AppSkeleton width={`100%`} height={200} />
          </AppVStack>
        }
        off={
          <AppVStack max gap={`16`} className={classNames(``, {}, [className])}>
            <AppSkeletonDeprecated
              className={cls.avatar}
              width={200}
              height={200}
              borderRadius={`50%`}
            />
            <AppSkeletonDeprecated width={300} height={32} />
            <AppSkeletonDeprecated width={600} height={24} />
            <AppSkeletonDeprecated width={`100%`} height={200} />
            <AppSkeletonDeprecated width={`100%`} height={200} />
          </AppVStack>
        }
      />
    );
  },
);

ArticleDetailsContentLoading.displayName = `ArticleDetailsContentLoading`;
