import cls from "./ArticleListItem.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import { AppText } from "@/shared/ui/appText/AppText";
import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { AppCard } from "@/shared/ui/appCard/AppCard";
import { AppAvatar } from "@/shared/ui/appAvatar/AppAvatar";
import { AppButton, AppButtonTheme } from "@/shared/ui/appButton/AppButton";
import { useTranslation } from "react-i18next";
import type { Article } from "../../model/types/article";
import { ArticleBlockType, ArticleView } from "../../model/types/article";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { RoutePath } from "@/shared/constants/router";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation();

  const types = <AppText text={article.type.join(`, `)} className={cls.types} />;
  const views = <>
      <AppText text={article.views.toString()} className={cls.views} />
      <AppIcon Svg={EyeIcon} />
  </ >;

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT);

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppCard>
                <div className={cls.header}>
                    <AppAvatar alt={t(`UserAvatar`)} size={30} src={article.user.avatar} />
                    <AppText text={article.user.username} className={cls.username} />
                    <AppText text={article.createdAt} className={cls.date} />
                </div>
                <AppText title={article.title} className={cls.title} />
                {types}
                <img src={article.img} className={cls.image} alt={article.title} />
                {textBlock?.type === ArticleBlockType.TEXT &&
                    <ArticleTextBlock block={textBlock} className={cls.textBlock} />
                }
                <div className={cls.footer}>
                    <AppLink to={`${RoutePath.article_details}${article.id}`}>
                        <AppButton theme={AppButtonTheme.OUTLINE}>{t(`article:ReadFullArticle`)}</AppButton>
                    </AppLink>
                    {views}
                </div>
            </AppCard>
        </div>
    );
  }

  return (
        <AppLink className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} to={`${RoutePath.article_details}${article.id}`}>
          <AppCard>
            <div className={cls.imageWrapper}>
              <img src={article.img} className={cls.image} alt={article.title}/>
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
});

ArticleListItem.displayName = `ArticleListItem`;
