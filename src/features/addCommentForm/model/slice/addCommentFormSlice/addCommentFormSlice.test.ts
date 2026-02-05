import type { DeepPartial } from "shared/types/types";
import type { AddCommentFormSchema } from "../../types/addCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";

describe(`addCommentFormSlice`, () => {
  test(`set text`, () => {
    const text = `text`;
    const state: DeepPartial<AddCommentFormSchema> = {
      text: ``,
    };

    expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText(text))).toEqual({
      text,
    });
  });
});
