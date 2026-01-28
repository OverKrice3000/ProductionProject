import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useCallback } from "react";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId";

export const useLoadArticleComments = (articleId: string | undefined) => {
  const dispatch = useAppDispatch();

  useEnvironmentEffect(
    useCallback(() => dispatch(fetchCommentsByArticleId(articleId)), [articleId, dispatch]),
  );
};
