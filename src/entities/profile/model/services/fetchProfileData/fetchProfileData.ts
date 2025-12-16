import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/stateProvider";
import type { Profile } from "entities/profile";

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  `profile/fetchProfileData`,
  async (_,
    { extra, rejectWithValue },
  ) => {
    try {
      const response = await extra.api.get<Profile>(`/profile`);

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`IncorrectLoginOrPassword`);
    }
  });
