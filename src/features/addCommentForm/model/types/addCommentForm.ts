export interface AddCommentFormRootSchema {
  addCommentForm?: AddCommentFormSchema;
}

export interface AddCommentFormSchema {
  text?: string;
  error?: string;
}
