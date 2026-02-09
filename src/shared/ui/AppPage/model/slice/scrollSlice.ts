import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { ScrollSchema } from "../types/scrollSchema";

interface ScrollPositionPayload {
  path: string;
  position: number;
}

const initialState: ScrollSchema = {
  position: {},
};

const scrollSlice = createSlice({
  name: `scroll`,
  initialState,
  reducers: {
    setScrollPosition(state, action: PayloadAction<ScrollPositionPayload>) {
      state.position[action.payload.path] = action.payload.position;
    },
  },
  extraReducers: () => {},
});

export const { actions: scrollActions, reducer: scrollReducer } = scrollSlice;
