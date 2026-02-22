import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppIcon as AppIconDeprecated } from "@/shared/ui/deprecated/AppIcon";
import { AppCard as AppCardDeprecated } from "@/shared/ui/deprecated/AppCard";
import { AppAvatar as AppAvatarDeprecated } from "@/shared/ui/deprecated/AppAvatar";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import EyeIconDeprecated from "@/shared/assets/icons/eye.svg";
import EyeIcon from "@/shared/assets/icons/redesigned/eye.svg";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppAvatar } from "@/shared/ui/redesigned/AppAvatar";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";

import cls from "./ArticleListItem.module.scss";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { ArticleBlockType, ArticleView } from "../../model/types/article";

import type { Article } from "../../model/types/article";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation(`articles`);

    const types = (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={<AppText text={article.type.join(`, `)} className={cls.types} />}
        off={
          <AppTextDeprecated
            text={article.type.join(`, `)}
            className={cls.types}
          />
        }
      />
    );
    const views = (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppHStack gap={`8`}>
            <AppIcon width={32} height={32} Svg={EyeIcon} />
            <AppText text={article.views.toString()} />
          </AppHStack>
        }
        off={
          <>
            <AppTextDeprecated
              text={article.views.toString()}
              className={cls.views}
            />
            <AppIconDeprecated Svg={EyeIconDeprecated} />
          </>
        }
      />
    );

    if (view === ArticleView.LIST) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      );

      return (
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={
            <AppCard
              className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
              ])}
              p={`p24`}
              gap={`16`}
              max
            >
              <AppHStack align={`center`} max gap={`8`}>
                <AppAvatar
                  alt={t(`UserAvatar`)}
                  size={32}
                  src={article.user.avatar}
                />
                <AppText bold text={article.user.username} size={`size_s`} />
                <AppText text={article.createdAt} size={`size_s`} />
              </AppHStack>
              <AppText bold title={article.title} />
              <AppText title={article.subtitle} size={`size_s`} />
              {types}
              <AppImage
                fallback={<AppSkeleton width={`100%`} height={250} />}
                src={article.img}
                className={cls.imageRedesigned}
                alt={article.title}
              />
              {textBlock?.type === ArticleBlockType.TEXT && (
                <AppText
                  text={textBlock.paragraphs.slice(0, 2).join(` `)}
                  className={cls.textBlockRedesigned}
                />
              )}
              <AppHStack align={`center`} justifyContent={`between`} max>
                <AppLink
                  to={GetRoutePath[AppRoutes.ARTICLE_DETAILS](article.id)}
                >
                  <AppButton variant={`outline`}>
                    {t(`ReadFullArticle`)}
                  </AppButton>
                </AppLink>
                {views}
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
                  <AppAvatarDeprecated
                    alt={t(`UserAvatar`)}
                    size={30}
                    src={article.user.avatar}
                  />
                  <AppTextDeprecated
                    text={article.user.username}
                    className={cls.username}
                  />
                  <AppTextDeprecated
                    text={article.createdAt}
                    className={cls.date}
                  />
                </div>
                <AppTextDeprecated
                  title={article.title}
                  className={cls.title}
                />
                {types}
                <AppImage
                  fallback={
                    <AppSkeletonDeprecated width={`100%`} height={250} />
                  }
                  src={article.img}
                  className={cls.image}
                  alt={article.title}
                />
                {textBlock?.type === ArticleBlockType.TEXT && (
                  <ArticleTextBlock
                    block={textBlock}
                    className={cls.textBlock}
                  />
                )}
                <div className={cls.footer}>
                  <AppLinkDeprecated
                    to={GetRoutePath[AppRoutes.ARTICLE_DETAILS](article.id)}
                  >
                    <AppButtonDeprecated theme={AppButtonTheme.OUTLINE}>
                      {t(`ReadFullArticle`)}
                    </AppButtonDeprecated>
                  </AppLinkDeprecated>
                  {views}
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
          <AppLink
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
            to={GetRoutePath[AppRoutes.ARTICLE_DETAILS](article.id)}
          >
            <AppCard
              p={`p0`}
              gap={`8`}
              className={cls.cardRedesigned}
              border="borderRound"
            >
              <AppImage
                fallback={<AppSkeleton width={`100%`} height={200} />}
                src={article.img}
                className={cls.imageRedesigned}
                alt={article.title}
              />
              <AppVStack max className={cls.infoWrapperRedesigned}>
                <AppText title={article.title} />
                <AppVStack gap="4" className={cls.footerRedesigned} max>
                  <AppHStack justifyContent={`between`} max>
                    <AppText text={article.createdAt} />
                    {views}
                  </AppHStack>
                  <AppHStack className={cls.avatarWrapperRedesigned} gap="4">
                    <AppAvatar size={32} src={article.user.avatar} />
                    <AppText bold text={article.user.username} />
                  </AppHStack>
                </AppVStack>
              </AppVStack>
            </AppCard>
          </AppLink>
        }
        off={
          <AppLinkDeprecated
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
            to={GetRoutePath[AppRoutes.ARTICLE_DETAILS](article.id)}
          >
            <AppCardDeprecated>
              <div className={cls.imageWrapper}>
                <AppImage
                  fallback={<AppSkeleton width={200} height={200} />}
                  src={article.img}
                  className={cls.image}
                  alt={article.title}
                />
                <AppTextDeprecated
                  text={article.createdAt}
                  className={cls.date}
                />
              </div>
              <div className={cls.infoWrapper}>
                {types}
                {views}
              </div>
              <AppTextDeprecated text={article.title} className={cls.title} />
            </AppCardDeprecated>
          </AppLinkDeprecated>
        }
      />
    );
  },
);

ArticleListItem.displayName = `ArticleListItem`;
