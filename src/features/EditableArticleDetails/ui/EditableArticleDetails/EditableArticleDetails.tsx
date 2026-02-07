import { memo } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import { articleReducer } from "../../model/slice/articleSlice";
import { useLoadArticle } from "entities/Article/utils/hooks/useLoadArticle";
import { useSelector } from "react-redux";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "../../model/selectors/articleSelectors";
import { ArticleDetails } from "entities/Article";
import { EditableArticleDetailsHeader } from "../EditableArticleDetailsHeader/EditableArticleDetailsHeader";
import { AppVStack } from "shared/ui/appStack";
import { classNames } from "shared/utils/classNames";

interface EditableArticleDetailsProps {
  className?: string;
  articleId?: string;
}

export const EditableArticleDetails = memo(({ className, articleId }: EditableArticleDetailsProps) => {
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
});

EditableArticleDetails.displayName = `EditableArticleDetails`;
