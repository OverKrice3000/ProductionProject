import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticlesList } from "entities/article";
import { useNavigate, useParams } from "react-router";
import { CommentList } from "entities/comment";
import { AppText, TextSize } from "shared/ui/appText/AppText";
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
import {
  getRecommendations,
  recommendationsReducer,
} from "pages/ArticleDetailsPage/model/slice/articleRecommendationsSlice/articleRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { useLoadArticleRecommendations } from "pages/ArticleDetailsPage/utils/hooks/useLoadArticleRecommendations";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(`article`);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useReducer(`comments`, commentsReducer);
  useReducer(`recommendations`, recommendationsReducer);
  useLoadArticleComments(id);
  useLoadArticleRecommendations();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

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
          <AppText size={TextSize.L} className={cls.recommendationsTitle} title={t(`Recommendations`)} />
          <ArticlesList articles={recommendations} isLoading={recommendationsIsLoading} className={cls.recommendations} />
          <AppText size={TextSize.L} className={cls.commentTitle} title={t(`Comments`)} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </AppPage>
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
