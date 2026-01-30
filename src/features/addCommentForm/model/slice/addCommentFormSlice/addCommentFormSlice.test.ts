import type { DeepPartial } from "shared/types/types";
import type { AddCommentFormSchema } from "features/addCommentForm/model/types/addCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "features/addCommentForm/model/slice/addCommentFormSlice/addCommentFormSlice";

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
