import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import { articleReducer } from "entities/article/model/slice/articleSlice";
import { useLoadArticle } from "entities/article/utils/hooks/useLoadArticle";
import { useSelector } from "react-redux";
import { getArticleData, getArticleError, getArticleIsLoading } from "entities/article/model/selectors/articleSelectors";
import { ArticleDetailsContentError } from "entities/article/ui/ArticleDetails/ArticleDetailsContentError";
import { ArticleDetailsContentLoading } from "entities/article/ui/ArticleDetails/ArticleDetailsContentLoading";
import { ArticleDetailsContent } from "entities/article/ui/ArticleDetails/ArticleDetailsContent";

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
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {isLoading ? <ArticleDetailsContentLoading /> : article ? <ArticleDetailsContent article={article} /> : <ArticleDetailsContentError error={error} />}
        </div>
  );
});

ArticleDetails.displayName = `ArticleDetails`;
