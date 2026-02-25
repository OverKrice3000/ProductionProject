import { memo } from "react";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppCard as AppCardDeprecated } from "@/shared/ui/deprecated/AppCard";
import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { classNames } from "@/shared/utils/classNames";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";

import { ArticleView } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";

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
              p={`p24`}
              gap={`16`}
            >
              <AppHStack maxW className={cls.header} gap={`8`}>
                <AppSkeleton borderRadius={`50%`} width={32} height={32} />
                <AppSkeleton width={210} height={20} />
              </AppHStack>
              <AppSkeleton width={200} height={32} />
              <AppSkeleton width={350} height={24} />
              <AppSkeleton width={150} height={24} />
              <AppSkeleton height={420} className={cls.imageRedesigned} />
              <AppSkeleton height={72} />
              <AppHStack justifyContent={`between`} className={cls.footer}>
                <AppSkeleton width={200} height={36} />
                <AppSkeleton width={100} height={36} />
              </AppHStack>
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
          <div
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
          >
            <AppCard
              p={`p0`}
              gap={`8`}
              className={cls.cardRedesigned}
              border="borderRound"
            >
              <AppSkeleton height={140} className={cls.imageRedesigned} />
              <AppVStack maxW className={cls.infoWrapperRedesigned}>
                <AppVStack gap={`4`}>
                  <AppSkeleton width={200} height={32} />
                  <AppSkeleton width={130} height={32} />
                </AppVStack>
                <AppVStack gap="4" className={cls.footerRedesigned} maxW>
                  <AppHStack justifyContent={`between`} maxW>
                    <AppSkeleton width={90} height={24} />
                    <AppSkeleton width={80} height={24} />
                  </AppHStack>
                  <AppHStack className={cls.avatarWrapperRedesigned} gap="4">
                    <AppSkeleton borderRadius={`50%`} width={32} height={32} />
                    <AppSkeleton width={70} height={24} />
                  </AppHStack>
                </AppVStack>
              </AppVStack>
            </AppCard>
          </div>
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
