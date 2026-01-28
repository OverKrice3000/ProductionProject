import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchArticleById } from "entities/article/model/services/fetchArticleById/fetchArticleById";

export const useLoadArticle = (articleId: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== `storybook`) {
      dispatch(fetchArticleById(articleId));
    }
  }, [articleId, dispatch]);
};
