import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "entities/profile";
import { getCommentFormError, getCommentFormText } from "./addCommentFormSelectors";
import type { AddCommentFormRootSchema } from "../..";

describe(`articleSelectors`, () => {
  test(`should return form text`, () => {
    const text = `text`;
    const state: DeepPartial<AddCommentFormRootSchema> = {
      addCommentForm: {
        text,
      },
    };

    expect(getCommentFormText(state as AddCommentFormRootSchema)).toEqual(text);
  });

  test(`should return no text with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getCommentFormText(state as AddCommentFormRootSchema)).toEqual(undefined);
  });

  test(`should return error`, () => {
    const error = `error`;
    const state: DeepPartial<AddCommentFormRootSchema> = {
      addCommentForm: {
        error,
      },
    };

    expect(getCommentFormError(state as AddCommentFormRootSchema)).toEqual(error);
  });

  test(`should return no error with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getCommentFormError(state as AddCommentFormRootSchema)).toEqual(undefined);
  });
});
