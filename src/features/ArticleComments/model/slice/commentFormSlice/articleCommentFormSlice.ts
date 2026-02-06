import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ArticleCommentFormSchema } from "../../types/articleCommentForm";

const initialState: ArticleCommentFormSchema = {
  text: ``,
};

const articleCommentFormSlice = createSlice({
  name: `addCommentForm`,
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { actions: articleCommentFormActions, reducer: articleCommentFormReducer } = articleCommentFormSlice;
