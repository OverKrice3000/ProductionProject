import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { AppVStack } from "@/shared/ui/AppStack";
import {
  AppText as AppTextDeprecated,
  TextSize,
} from "@/shared/ui/deprecated/AppText";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { CommentForm, CommentList } from "@/entities/Comment";
import { classNames } from "@/shared/utils/classNames";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

import {
  commentsReducer,
  getArticleComments,
} from "../../model/slice/articleCommentsSlice/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/articleComments/comments";
import { addCommentForArticle } from "../../model/service/addCommentForArticle/addCommentForArticle";
import { useLoadArticleComments } from "../../utils/hooks/useLoadArticleComments";
import {
  articleCommentFormActions,
  articleCommentFormReducer,
} from "../../model/slice/commentFormSlice/articleCommentFormSlice";
import { getCommentFormText } from "../../model/selectors/articleCommentsForm/articleCommentFormSelectors";

interface ArticleCommentsProps extends AppFlexProps {
  className?: string;
  articleId?: string;
}

export const ArticleComments = memo(
  ({ className, articleId, ...other }: ArticleCommentsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation(`article`);

    useReducer(`articleCommentsForm`, articleCommentFormReducer);
    useReducer(`comments`, commentsReducer);
    useLoadArticleComments(articleId);

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const text = useSelector(getCommentFormText) ?? ``;

    const onTextChange = useCallback(
      (text: string) => {
        dispatch(articleCommentFormActions.setText(text));
      },
      [dispatch],
    );

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle({ text, articleId }));
      },
      [articleId, dispatch],
    );

    return (
      <AppVStack
        {...other}
        gap={`16`}
        max
        className={classNames(``, {}, [className])}
      >
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={<AppText size={TextSize.L} title={t(`Comments`)} />}
          off={<AppTextDeprecated size={TextSize.L} title={t(`Comments`)} />}
        />

        <CommentForm
          text={text}
          onTextChange={onTextChange}
          onSendComment={onSendComment}
        />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </AppVStack>
    );
  },
);

ArticleComments.displayName = `ArticleComments`;
