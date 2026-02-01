import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import type { ArticleView } from "entities/article";
import { ArticleList, ArticleViewSelector } from "entities/article";
import {
  articlesListActions,
  articlesListReducer,
  getArticlesList,
} from "pages/ArticlesPage/model/slice/articlesListSlice";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticlesListIsLoading,
  getArticlesListView,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { AppPage } from "shared/ui/appPage/AppPage";
import { useConstantReducer } from "shared/utils/hooks/useConstantReducer";
import { useInitializeArticlesState } from "pages/ArticlesPage/utils/hooks/useInitializeArticlesState";
import { useFetchNextArticlesPage } from "pages/ArticlesPage/utils/hooks/useFetchNextArticlesPage";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
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

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesListActions.setView(view));
  }, [dispatch]);

  return (
        <AppPage className={classNames(``, {}, [className])} onScrollEnd={onLoadNextPart}>
          { view && <ArticleViewSelector view={view} onViewClick={onChangeView} /> }
          <ArticleList isLoading={isLoading} view={view} articles={articles} />
        </AppPage>
  );
});

ArticlesPage.displayName = `ArticlesPage`;

export default ArticlesPage;
