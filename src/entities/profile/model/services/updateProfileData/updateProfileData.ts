import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Profile } from "entities/profile";
import { getProfileForm } from "entities/profile";

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  `profile/updateProfileData`,
  async (_,
    { extra, rejectWithValue, getState },
  ) => {
    try {
      const formData = getProfileForm(getState());
      const response = await extra.api.put<Profile>(`/profile`, formData);

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`ProfileLoadingError`);
    }
  });
