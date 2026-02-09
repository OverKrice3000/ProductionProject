import type { ArticleCommentFormRootSchema } from "../../types/articleCommentForm";

export const getCommentFormText = (state: ArticleCommentFormRootSchema) =>
  state.articleCommentsForm?.text;
export const getCommentFormError = (state: ArticleCommentFormRootSchema) =>
  state.articleCommentsForm?.error;
