import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/article";
import { useNavigate, useParams } from "react-router";
import { CommentList } from "entities/comment";
import { AppText } from "shared/ui/appText/AppText";
import { useReducer } from "shared/utils/hooks/useReducer";
import { commentsReducer } from "pages/ArticleDetailsPage";
import { getArticleComments } from "pages/ArticleDetailsPage/model/slice/articleCommentsSlice/articleCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "pages/ArticleDetailsPage/model/selectors/comments";
import { useLoadArticleComments } from "pages/ArticleDetailsPage/utils/hooks/useLoadArticleComments";
import { AddCommentForm } from "features/addCommentForm";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/service/addCommentForArticle/addCommentForArticle";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { AppPage } from "widgets/AppPage/ui/AppPage/AppPage";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(`article`);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useReducer(`comments`, commentsReducer);
  useLoadArticleComments(id);

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  const onBackToList = useCallback(() => {
    navigate(`/articles`);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id) {
    return <AppPage className={classNames(``, {}, [className])}>
          {t(`ArticleNotFound`)}
      </AppPage>;
  }

  return (
        <AppPage className={classNames(``, {}, [className])}>
          <AppButton theme={AppButtonTheme.OUTLINE} onClick={onBackToList}>
              {t(`BackToArticlesList`)}
          </AppButton>
          <ArticleDetails articleId={id} />
          <AppText className={cls.commentTitle} title={t(`Comments`)} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={isLoading} comments={comments} />
        </AppPage>
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
