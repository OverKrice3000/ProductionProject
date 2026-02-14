import { memo } from "react";
import { useSelector } from "react-redux";

import { AppVStack } from "@/shared/ui/AppStack";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { ArticleDetails } from "@/entities/Article";
import { classNames } from "@/shared/utils/classNames";

import { articleReducer } from "../../model/slice/articleSlice";
import { useLoadArticle } from "../../utils/hooks/useLoadArticle";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "../../model/selectors/articleSelectors";
import { EditableArticleDetailsHeader } from "../EditableArticleDetailsHeader/EditableArticleDetailsHeader";

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
      <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
        <EditableArticleDetailsHeader />
        <ArticleDetails article={article} isLoading={isLoading} error={error} />
      </AppVStack>
    );
  },
);

EditableArticleDetails.displayName = `EditableArticleDetails`;
