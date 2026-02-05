import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticlesList } from "entities/article";
import { useParams } from "react-router";
import { CommentList } from "entities/comment";
import { AppText, TextSize } from "shared/ui/appText/AppText";
import { useReducer } from "shared/utils/hooks/useReducer";
import { commentsReducer } from "../..";
import { getArticleComments } from "../../model/slice/articleCommentsSlice/articleCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useLoadArticleComments } from "../../utils/hooks/useLoadArticleComments";
import { AddCommentForm } from "features/addCommentForm";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { addCommentForArticle } from "../../model/service/addCommentForArticle/addCommentForArticle";
import { AppPage } from "shared/ui/appPage/ui/AppPage/AppPage";
import {
  getRecommendations,
  recommendationsReducer,
} from "../../model/slice/articleRecommendationsSlice/articleRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { useLoadArticleRecommendations } from "../../utils/hooks/useLoadArticleRecommendations";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(`article`);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useReducer(`comments`, commentsReducer);
  useReducer(`recommendations`, recommendationsReducer);
  useLoadArticleComments(id);
  useLoadArticleRecommendations();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

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
          <ArticleDetailsPageHeader />
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
