import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AddCommentFormSchema } from "features/addCommentForm/model/types/addCommentForm";

const initialState: AddCommentFormSchema = {
  text: ``,
};

const addCommentFormSlice = createSlice({
  name: `addCommentForm`,
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { actions: addCommentFormActions, reducer: addCommentFormReducer } = addCommentFormSlice;
