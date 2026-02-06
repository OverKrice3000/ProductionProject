export interface ArticleCommentFormRootSchema {
  articleCommentsForm?: ArticleCommentFormSchema;
}

export interface ArticleCommentFormSchema {
  text?: string;
  error?: string;
}
