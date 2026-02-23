import { memo } from "react";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppCard as AppCardDeprecated } from "@/shared/ui/deprecated/AppCard";
import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { classNames } from "@/shared/utils/classNames";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";
import { AppHStack } from "@/shared/ui/AppStack";

import cls from "./ArticleListItem.module.scss";
import { ArticleView } from "../../model/types/article";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  ({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.LIST) {
      return (
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={
            <AppCard
              className={classNames(cls.ArticleListItemRedesigned, {}, [
                className,
                cls[view],
              ])}
              max
            >
              <AppHStack maxW className={cls.header}>
                <AppSkeleton borderRadius={`50%`} width={30} height={30} />
                <AppSkeleton
                  width={150}
                  height={16}
                  className={cls.username}
                ></AppSkeleton>
                <AppSkeleton
                  width={150}
                  height={16}
                  className={cls.date}
                ></AppSkeleton>
              </AppHStack>
              <AppSkeleton width={250} height={24} className={cls.title} />
              <AppSkeleton height={200} className={cls.image} />
              <div className={cls.footer}>
                <AppSkeleton width={200} height={36} />
              </div>
            </AppCard>
          }
          off={
            <div
              className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
              ])}
            >
              <AppCardDeprecated>
                <div className={cls.header}>
                  <AppSkeletonDeprecated
                    borderRadius={`50%`}
                    width={30}
                    height={30}
                  />
                  <AppSkeletonDeprecated
                    width={150}
                    height={16}
                    className={cls.username}
                  ></AppSkeletonDeprecated>
                  <AppSkeletonDeprecated
                    width={150}
                    height={16}
                    className={cls.date}
                  ></AppSkeletonDeprecated>
                </div>
                <AppSkeletonDeprecated
                  width={250}
                  height={24}
                  className={cls.title}
                />
                <AppSkeletonDeprecated height={200} className={cls.image} />
                <div className={cls.footer}>
                  <AppSkeletonDeprecated width={200} height={36} />
                </div>
              </AppCardDeprecated>
            </div>
          }
        />
      );
    }

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            max
            className={classNames(cls.ArticleListItemRedesigned, {}, [
              className,
              cls[view],
            ])}
          >
            <div className={cls.imageWrapper}>
              <AppSkeleton width={200} height={200} className={cls.image} />
            </div>
            <div className={cls.infoWrapper}>
              <AppSkeleton width={130} height={16} className={cls.types} />
            </div>
            <AppSkeleton width={150} height={16} className={cls.title} />
          </AppCard>
        }
        off={
          <div
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
          >
            <AppCardDeprecated>
              <div className={cls.imageWrapper}>
                <AppSkeletonDeprecated
                  width={200}
                  height={200}
                  className={cls.image}
                />
              </div>
              <div className={cls.infoWrapper}>
                <AppSkeletonDeprecated
                  width={130}
                  height={16}
                  className={cls.types}
                />
              </div>
              <AppSkeletonDeprecated
                width={150}
                height={16}
                className={cls.title}
              />
            </AppCardDeprecated>
          </div>
        }
      />
    );
  },
);

ArticleListItemSkeleton.displayName = `ArticleListItem`;
