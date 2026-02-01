import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useCallback } from "react";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";
import {
  fetchArticleRecommendations,
} from "pages/ArticleDetailsPage/model/service/fetchArticleRecommentations/fetchArticleRecommendations";

export const useLoadArticleRecommendations = () => {
  const dispatch = useAppDispatch();

  useEnvironmentEffect(
    useCallback(() => dispatch(fetchArticleRecommendations()), [dispatch]),
  );
};
