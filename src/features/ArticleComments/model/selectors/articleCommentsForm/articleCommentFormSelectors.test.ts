import type { DeepPartial } from "@/shared/types/types";
import type { ArticleCommentFormRootSchema } from "../../..";
import {
  getCommentFormError,
  getCommentFormText,
} from "./articleCommentFormSelectors";

describe(`articleSelectors`, () => {
  test(`should return form text`, () => {
    const text = `text`;
    const state: DeepPartial<ArticleCommentFormRootSchema> = {
      articleCommentsForm: {
        text,
      },
    };

    expect(getCommentFormText(state as ArticleCommentFormRootSchema)).toEqual(text);
  });

  test(`should return no text with empty state`, () => {
    const state: DeepPartial<ArticleCommentFormRootSchema> = {};

    expect(getCommentFormText(state as ArticleCommentFormRootSchema)).toEqual(undefined);
  });

  test(`should return error`, () => {
    const error = `error`;
    const state: DeepPartial<ArticleCommentFormRootSchema> = {
      articleCommentsForm: {
        error,
      },
    };

    expect(getCommentFormError(state as ArticleCommentFormRootSchema)).toEqual(error);
  });

  test(`should return no error with empty state`, () => {
    const state: DeepPartial<ArticleCommentFormRootSchema> = {};

    expect(getCommentFormError(state as ArticleCommentFormRootSchema)).toEqual(undefined);
  });
});
