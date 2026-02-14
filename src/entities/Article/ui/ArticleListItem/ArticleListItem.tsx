import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppButton, AppButtonTheme } from "@/shared/ui/deprecated/AppButton";
import { AppText } from "@/shared/ui/deprecated/AppText";
import { AppIcon } from "@/shared/ui/deprecated/AppIcon";
import { AppCard } from "@/shared/ui/deprecated/AppCard";
import { AppAvatar } from "@/shared/ui/deprecated/AppAvatar";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { AppSkeleton } from "@/shared/ui/deprecated/AppSkeleton";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import { AppImage } from "@/shared/ui/deprecated/AppImage/AppImage";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { classNames } from "@/shared/utils/classNames";

import { ArticleBlockType, ArticleView } from "../../model/types/article";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import cls from "./ArticleListItem.module.scss";

import type { Article } from "../../model/types/article";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation();

    const types = (
      <AppText text={article.type.join(`, `)} className={cls.types} />
    );
    const views = (
      <>
        <AppText text={article.views.toString()} className={cls.views} />
        <AppIcon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.LIST) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      );

      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <AppCard>
            <div className={cls.header}>
              <AppAvatar
                alt={t(`UserAvatar`)}
                size={30}
                src={article.user.avatar}
              />
              <AppText text={article.user.username} className={cls.username} />
              <AppText text={article.createdAt} className={cls.date} />
            </div>
            <AppText title={article.title} className={cls.title} />
            {types}
            <AppImage
              fallback={<AppSkeleton width={`100%`} height={250} />}
              src={article.img}
              className={cls.image}
              alt={article.title}
            />
            {textBlock?.type === ArticleBlockType.TEXT && (
              <ArticleTextBlock block={textBlock} className={cls.textBlock} />
            )}
            <div className={cls.footer}>
              <AppLink to={GetRoutePath[AppRoutes.ARTICLE_DETAILS](article.id)}>
                <AppButton theme={AppButtonTheme.OUTLINE}>
                  {t(`article:ReadFullArticle`)}
                </AppButton>
              </AppLink>
              {views}
            </div>
          </AppCard>
        </div>
      );
    }

    return (
      <AppLink
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        to={GetRoutePath[AppRoutes.ARTICLE_DETAILS](article.id)}
      >
        <AppCard>
          <div className={cls.imageWrapper}>
            <AppImage
              fallback={<AppSkeleton width={200} height={200} />}
              src={article.img}
              className={cls.image}
              alt={article.title}
            />
            <AppText text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <AppText text={article.title} className={cls.title} />
        </AppCard>
      </AppLink>
    );
  },
);

ArticleListItem.displayName = `ArticleListItem`;
