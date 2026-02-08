import { memo } from "react";
import { ArticlesList } from "@/entities/Article";
import { useSelector } from "react-redux";
import { articlesListReducer, getArticlesList } from "../../model/slice/articlesListSlice/articlesListSlice";
import { getArticlesListIsLoading, getArticlesListView } from "../../model/selector/articlesListSelectors";
import { useInitializeArticlesState } from "../../lib/hooks/useInitializeArticlesState";
import { useConstantReducer } from "@/shared/utils/hooks/useConstantReducer";
import { classNames } from "@/shared/utils/classNames";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const initializeArticlesState = useInitializeArticlesState();
  useConstantReducer(
        `articlesList`,
        articlesListReducer,
        initializeArticlesState,
  );

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const view = useSelector(getArticlesListView);

  return (
      <ArticlesList isLoading={isLoading} view={view} articles={articles} className={classNames(``, {}, [className])} />
  );
});

ArticleInfiniteList.displayName = `ArticleInfiniteList`;
