import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import type { ArticleView } from "entities/article";
import { ArticleList, ArticleViewSelector } from "entities/article";
import { useReducer } from "shared/utils/hooks/useReducer";
import {
  articlesListActions,
  articlesListReducer,
  getArticlesList,
} from "pages/ArticlesPage/model/slice/articlesListSlice";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
  getArticlesListIsLoading,
  getArticlesListView,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { AppPage } from "shared/ui/appPage/AppPage";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/service/fetchNextArticlesPage/fetchNextArticlesPage";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  useReducer(`articlesList`, articlesListReducer);
  const dispatch = useAppDispatch();

  useEnvironmentEffect(useCallback(() => {
    dispatch(articlesListActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  }, [dispatch]));

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const view = useSelector(getArticlesListView);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

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
