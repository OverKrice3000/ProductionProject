import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "entities/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: `profile`,
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    save: (state) => {
      state.readonly = true;
      state.data = state.form;
    },
    updateProfile: (state, action: PayloadAction<Partial<Profile>>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    }).addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
    }).addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
