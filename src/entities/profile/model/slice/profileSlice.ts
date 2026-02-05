import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../..";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  loadingError: undefined,
  data: undefined,
  form: undefined,
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
      state.validateErrors = undefined;
      state.form = state.data;
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
      state.loadingError = undefined;
      state.isLoading = true;
    }).addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
    }).addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.loadingError = action.payload;
    }).addCase(updateProfileData.pending, (state) => {
      state.validateErrors = undefined;
      state.isLoading = true;
    }).addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.readonly = true;
      state.data = action.payload;
      state.form = action.payload;
    }).addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
