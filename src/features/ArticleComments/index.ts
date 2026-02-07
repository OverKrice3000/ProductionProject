export type { ArticleCommentFormRootSchema } from "./model/types/articleCommentForm";
export type { ArticleCommentsRootSchema } from './model/types/articleCommentsSchema';

export { commentsReducer } from './model/slice/articleCommentsSlice/articleCommentsSlice';
export { articleCommentFormReducer } from "./model/slice/commentFormSlice/articleCommentFormSlice";
export { ArticleComments } from "./ui/ArticleComments/ArticleComments";
