import cls from './ArticlesPage.module.scss';
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { ArticlesList } from "entities/article";
import {
  articlesListReducer,
  getArticlesList,
} from "pages/ArticlesPage/model/slice/articlesListSlice/articlesListSlice";
import { useSelector } from "react-redux";
import {
  getArticlesListIsLoading,
  getArticlesListView,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { AppPage } from "widgets/AppPage/ui/AppPage/AppPage";
import { useConstantReducer } from "shared/utils/hooks/useConstantReducer";
import { useInitializeArticlesState } from "pages/ArticlesPage/utils/hooks/useInitializeArticlesState";
import { useFetchNextArticlesPage } from "pages/ArticlesPage/utils/hooks/useFetchNextArticlesPage";
import { ArticlesPageFilters } from "pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const initializeArticlesState = useInitializeArticlesState();
  useConstantReducer(
      `articlesList`,
      articlesListReducer,
      initializeArticlesState,
  );

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const view = useSelector(getArticlesListView);

  const onLoadNextPart = useFetchNextArticlesPage();

  return (
        <AppPage className={classNames(``, {}, [className])} onScrollEnd={onLoadNextPart}>
          <ArticlesPageFilters />
          <ArticlesList isLoading={isLoading} view={view} articles={articles} className={cls.list} />
        </AppPage>
  );
});

ArticlesPage.displayName = `ArticlesPage`;

export default ArticlesPage;
