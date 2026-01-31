import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import type { Article } from "entities/article";
import { ArticleView } from "entities/article";
import { AppText } from "shared/ui/appText/AppText";
import { AppIcon } from "shared/ui/appIcon/AppIcon";
import EyeIcon from "shared/assets/icons/eye.svg";
import { AppCard } from "shared/ui/appCard/AppCard";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { useTranslation } from "react-i18next";
import { ArticleBlockType } from "entities/article/model/types/article";
import { ArticleTextBlock } from "entities/article/ui/ArticleTextBlock/ArticleTextBlock";
import { useNavigate } from "react-router";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation(`article`);
  const navigate = useNavigate();

  const types = <AppText text={article.type.join(`, `)} className={cls.types} />;
  const views = <>
      <AppText text={article.views.toString()} className={cls.views} />
      <AppIcon Svg={EyeIcon} />
  </ >;

  const onOpenArticle = () => {
    navigate(`/articles/${article.id}`);
  };

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT);

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppCard>
                <div className={cls.header}>
                    <AppAvatar size={30} src={article.user.avatar} />
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
                    <AppButton onClick={onOpenArticle} theme={AppButtonTheme.OUTLINE}>{t(`ReadFullArticle`)}</AppButton>
                    {views}
                </div>
            </AppCard>
        </div>
    );
  }

  return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <AppCard onClick={onOpenArticle}>
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
        </div>
  );
});

ArticleListItem.displayName = `ArticleListItem`;
