import cls from "./ArticleListItem.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import { AppCard } from "@/shared/ui/AppCard/AppCard";
import { AppSkeleton } from "@/shared/ui/AppSkeleton/AppSkeleton";
import { ArticleView } from "../../model/types/article";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.LIST) {
    return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <AppCard>
                    <div className={cls.header}>
                        <AppSkeleton borderRadius={`50%`} width={30} height={30}/>
                        <AppSkeleton width={150} height={16} className={cls.username}></AppSkeleton>
                        <AppSkeleton width={150} height={16} className={cls.date}></AppSkeleton>
                    </div>
                    <AppSkeleton width={250} height={24} className={cls.title} />
                    <AppSkeleton height={200} className={cls.image}/>
                    <div className={cls.footer}>
                        <AppSkeleton width={200} height={36} />
                    </div>
                </AppCard>
            </div>
    );
  }

  return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppCard>
                <div className={cls.imageWrapper}>
                    <AppSkeleton width={200} height={200} className={cls.image}/>
                </div>
                <div className={cls.infoWrapper}>
                    <AppSkeleton width={130} height={16} className={cls.types}/>
                </div>
                <AppSkeleton width={150} height={16} className={cls.title}/>
            </AppCard>
        </div>
  );
});

ArticleListItemSkeleton.displayName = `ArticleListItem`;
