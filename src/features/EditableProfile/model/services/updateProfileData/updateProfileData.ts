import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkConfig } from "@/app/providers/StateProvider";
import type { Profile } from "@/entities/Profile";
import { ValidateProfileError } from "@/entities/Profile";

import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfile } from "../../../lib/validateProfile/validateProfile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  `profile/updateProfileData`,
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());
      const validationResult = validateProfile(formData);

      if (!formData?.id) {
        return rejectWithValue([ValidateProfileError.NO_DATA]);
      }

      if (validationResult.length !== 0) {
        return rejectWithValue(validationResult);
      }

      const response = await extra.api.put<Profile>(
        `/profile/${formData.id}`,
        formData,
      );

      if (!response.data) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
