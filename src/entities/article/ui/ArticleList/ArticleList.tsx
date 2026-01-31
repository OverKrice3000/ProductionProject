import cls from "./ArticleList.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import type { Article } from "entities/article/model/types/article";
import { ArticleView } from "entities/article/model/types/article";
import { ArticleListItem } from "entities/article/ui/ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "entities/article/ui/ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo(({ className, articles, isLoading, view = ArticleView.PLATE }: ArticleListProps) => {
  const renderArticle = (article: Article) => (
      <ArticleListItem article={article} key={article.id} view={view} className={cls.card} />
  );

  if (isLoading) {
    return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {new Array(view === ArticleView.PLATE ? 9 : 3).fill(0).map(
        (_, index) => <ArticleListItemSkeleton className={cls.card} view={view} key={index} />,
      )}
    </div>;
  }

  return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles.length > 0 ? articles.map((renderArticle)) : null }
        </div>
  );
});

ArticleList.displayName = `ArticleList`;
