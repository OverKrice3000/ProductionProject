import type { DeepPartial } from "shared/types/types";
import {
  articleCommentFormActions,
  articleCommentFormReducer,
} from "./articleCommentFormSlice";
import type { ArticleCommentFormSchema } from "../../types/articleCommentForm";

describe(`articleCommentFormSlice`, () => {
  test(`set text`, () => {
    const text = `text`;
    const state: DeepPartial<ArticleCommentFormSchema> = {
      text: ``,
    };

    expect(articleCommentFormReducer(state as ArticleCommentFormSchema, articleCommentFormActions.setText(text))).toEqual({
      text,
    });
  });
});
