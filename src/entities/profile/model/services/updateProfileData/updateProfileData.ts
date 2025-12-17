import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Profile } from "entities/profile";
import { getProfileForm } from "entities/profile";
import { validateProfile } from "entities/profile/model/services/validateProfile/validateProfile";
import { ValidateProfileError } from "entities/profile/model/types/profile";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  `profile/updateProfileData`,
  async (_,
    { extra, rejectWithValue, getState },
  ) => {
    try {
      const formData = getProfileForm(getState());
      const validationResult = validateProfile(formData);

      if (validationResult.length !== 0) {
        return rejectWithValue(validationResult);
      }

      const response = await extra.api.put<Profile>(`/profile`, formData);

      if (!response.data) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  });
