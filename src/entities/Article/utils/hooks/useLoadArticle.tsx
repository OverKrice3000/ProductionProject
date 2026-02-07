import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useCallback } from "react";
import { fetchArticleById } from "features/EditableArticleDetails/model/services/fetchArticleById/fetchArticleById";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";

export const useLoadArticle = (articleId: string) => {
  const dispatch = useAppDispatch();

  useEnvironmentEffect(
    useCallback(() => dispatch(fetchArticleById(articleId)), [articleId, dispatch]),
  );
};
