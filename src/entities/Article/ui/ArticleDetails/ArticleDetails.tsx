import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import { articleReducer } from "../../model/slice/articleSlice";
import { useLoadArticle } from "../../utils/hooks/useLoadArticle";
import { useSelector } from "react-redux";
import { getArticleData, getArticleError, getArticleIsLoading } from "../../model/selectors/articleSelectors";
import { ArticleDetailsContentError } from "./ArticleDetailsContentError";
import { ArticleDetailsContentLoading } from "./ArticleDetailsContentLoading";
import { ArticleDetailsContent } from "./ArticleDetailsContent";
import { AppVStack } from "shared/ui/appStack";

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

export const ArticleDetails = memo(({ className, articleId }: ArticleDetailsProps) => {
  useReducer(`article`, articleReducer);
  useLoadArticle(articleId);

  const article = useSelector(getArticleData);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  return (
        <AppVStack gap={`16`} className={classNames(``, {}, [className])}>
            {isLoading ? <ArticleDetailsContentLoading /> : article ? <ArticleDetailsContent article={article} /> : <ArticleDetailsContentError error={error} />}
        </AppVStack>
  );
});

ArticleDetails.displayName = `ArticleDetails`;
