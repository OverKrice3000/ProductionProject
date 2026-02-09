import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/utils/classNames";
import { AppText, TextSize } from "@/shared/ui/AppText";

import cls from "./ArticleList.module.scss";
import { ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import type { Article } from "../../model/types/article";

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));
};

export const ArticlesList = memo(
  ({
    className,
    articles,
    isLoading,
    view = ArticleView.PLATE,
  }: ArticleListProps) => {
    const { t } = useTranslation(`article`);

    const renderArticle = (article: Article) => (
      <ArticleListItem
        article={article}
        key={article.id}
        view={view}
        className={cls.card}
      />
    );

    if (!isLoading && !articles?.length) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <AppText size={TextSize.L} title={t(`ArticlesNotFound`)} />
        </div>
      );
    }

    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles && articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </div>
    );
  },
);

ArticlesList.displayName = `ArticleList`;
