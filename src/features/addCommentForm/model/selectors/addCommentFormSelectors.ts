import type { AddCommentFormRootSchema } from "features/addCommentForm";

export const getCommentFormText = (state: AddCommentFormRootSchema) => state.addCommentForm?.text;
export const getCommentFormError = (state: AddCommentFormRootSchema) => state.addCommentForm?.error;
