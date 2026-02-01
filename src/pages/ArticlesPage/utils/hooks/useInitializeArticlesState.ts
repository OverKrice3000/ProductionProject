import { useCallback } from "react";
import { articlesListActions } from "pages/ArticlesPage/model/slice/articlesListSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";

export const useInitializeArticlesState = () => {
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(articlesListActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }),
    );
  }, [dispatch]);
};
