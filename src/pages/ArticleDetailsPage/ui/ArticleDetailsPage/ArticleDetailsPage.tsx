import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router";
import { CommentList } from "entities/comment";
import { AppText } from "shared/ui/appText/AppText";
import { useReducer } from "shared/utils/hooks/useReducer";
import { commentsReducer } from "pages/ArticleDetailsPage";
import { getArticleComments } from "pages/ArticleDetailsPage/model/slice/articleCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "pages/ArticleDetailsPage/model/selectors/comments";
import { useLoadArticleComments } from "pages/ArticleDetailsPage/utils/hooks/useLoadArticleComments";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(`article`);

  const { id } = useParams();

  useReducer(`comments`, commentsReducer);
  useLoadArticleComments(id);

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  if (!id) {
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          {t(`ArticleNotFound`)}
      </div>;
  }

  return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <ArticleDetails articleId={id} />
          <AppText className={cls.commentTitle} title={t(`Comments`)} />
          <CommentList isLoading={isLoading} comments={comments} />
        </div>
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
