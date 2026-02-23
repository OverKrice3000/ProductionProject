import { memo } from "react";
import { useSelector } from "react-redux";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppVStack } from "@/shared/ui/AppStack";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { ArticleDetails, ArticleDetailsHeader } from "@/entities/Article";
import { classNames } from "@/shared/utils/classNames";
import { AppCard } from "@/shared/ui/redesigned/AppCard";

import { articleReducer } from "../../model/slice/articleSlice";
import { useLoadArticle } from "../../utils/hooks/useLoadArticle";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "../../model/selectors/articleSelectors";

interface EditableArticleDetailsProps {
  className?: string;
  articleId?: string;
}

export const EditableArticleDetails = memo(
  ({ className, articleId }: EditableArticleDetailsProps) => {
    useReducer(`article`, articleReducer);
    useLoadArticle(articleId);

    const article = useSelector(getArticleData);
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            p={`p24`}
            border={`borderRound`}
            max
            className={classNames(``, {}, [className])}
          >
            <ArticleDetails
              article={article}
              isLoading={isLoading}
              error={error}
            />
          </AppCard>
        }
        off={
          <AppVStack
            gap={`16`}
            maxW
            className={classNames(``, {}, [className])}
          >
            <ArticleDetailsHeader article={article} />
            <ArticleDetails
              article={article}
              isLoading={isLoading}
              error={error}
            />
          </AppVStack>
        }
      />
    );
  },
);

EditableArticleDetails.displayName = `EditableArticleDetails`;
