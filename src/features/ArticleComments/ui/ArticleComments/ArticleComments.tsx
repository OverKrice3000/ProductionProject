import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { CommentForm, CommentList } from "entities/Comment";
import { useSelector } from "react-redux";
import {
  commentsReducer,
  getArticleComments,
} from "../../model/slice/articleCommentsSlice/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/articleComments/comments";
import { addCommentForArticle } from "../../model/service/addCommentForArticle/addCommentForArticle";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useReducer } from "shared/utils/hooks/useReducer";
import { useLoadArticleComments } from "../../utils/hooks/useLoadArticleComments";
import { useParams } from "react-router";
import {
  articleCommentFormActions,
  articleCommentFormReducer,
} from "../../model/slice/commentFormSlice/articleCommentFormSlice";
import {
  getCommentFormText,
} from "../../model/selectors/articleCommentsForm/articleCommentFormSelectors";

interface ArticleCommentsProps {
  className?: string;
}

export const ArticleComments = memo(({ className }: ArticleCommentsProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useReducer(`articleCommentsForm`, articleCommentFormReducer);
  useReducer(`comments`, commentsReducer);
  useLoadArticleComments(id);

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const text = useSelector(getCommentFormText) ?? ``;

  const onTextChange = useCallback((text: string) => {
    dispatch(articleCommentFormActions.setText(text));
  }, [dispatch]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
        <div className={classNames(``, {}, [className])}>
          <CommentForm text={text} onTextChange={onTextChange} onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </div>
  );
});

ArticleComments.displayName = `ArticleComments`;
