import { useCallback } from "react";

import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { useEnvironmentEffect } from "@/shared/utils/hooks/useEnvironmentEffect";

import { fetchCommentsByArticleId } from "../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const useLoadArticleComments = (articleId: string | undefined) => {
  const dispatch = useAppDispatch();

  useEnvironmentEffect(
    useCallback(
      () => dispatch(fetchCommentsByArticleId(articleId)),
      [articleId, dispatch],
    ),
  );
};
