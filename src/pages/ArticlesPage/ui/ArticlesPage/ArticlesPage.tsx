import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { ArticleList, ArticleView, testArticle } from "entities/article";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
          <ArticleList isLoading={false} view={ArticleView.LIST} articles={new Array(16).fill(0).map((_, index) => ({
            ...testArticle,
            id: index.toString(),
          }))} />
        </div>
  );
});

ArticlesPage.displayName = `ArticlesPage`;

export default ArticlesPage;
