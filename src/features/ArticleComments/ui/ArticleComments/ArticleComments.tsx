import { classNames } from "@/shared/utils/classNames";
import { memo, useCallback } from "react";
import { CommentForm, CommentList } from "@/entities/Comment";
import { useSelector } from "react-redux";
import {
  commentsReducer,
  getArticleComments,
} from "../../model/slice/articleCommentsSlice/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/articleComments/comments";
import { addCommentForArticle } from "../../model/service/addCommentForArticle/addCommentForArticle";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { useLoadArticleComments } from "../../utils/hooks/useLoadArticleComments";
import {
  articleCommentFormActions,
  articleCommentFormReducer,
} from "../../model/slice/commentFormSlice/articleCommentFormSlice";
import {
  getCommentFormText,
} from "../../model/selectors/articleCommentsForm/articleCommentFormSelectors";
import { AppVStack } from "@/shared/ui/AppStack";
import { AppText, TextSize } from "@/shared/ui/AppText/AppText";
import { useTranslation } from "react-i18next";

interface ArticleCommentsProps {
  className?: string;
  articleId?: string;
}

export const ArticleComments = memo(({ className, articleId }: ArticleCommentsProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(`article`);

  useReducer(`articleCommentsForm`, articleCommentFormReducer);
  useReducer(`comments`, commentsReducer);
  useLoadArticleComments(articleId);

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const text = useSelector(getCommentFormText) ?? ``;

  const onTextChange = useCallback((text: string) => {
    dispatch(articleCommentFormActions.setText(text));
  }, [dispatch]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle({ text, articleId }));
  }, [articleId, dispatch]);

  return (
        <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
          <AppText size={TextSize.L} title={t(`Comments`)} />
          <CommentForm text={text} onTextChange={onTextChange} onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </AppVStack>
  );
});

ArticleComments.displayName = `ArticleComments`;
