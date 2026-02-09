import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "src/app/providers/StateProvider";
import type { Profile } from "../../../../../entities/Profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  `profile/fetchProfileData`,
  async (profileId,
    { extra, rejectWithValue },
  ) => {
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

      if (!response.data) {
        return rejectWithValue(`ProfileLoadingError`);
      }

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`ProfileLoadingError`);
    }
  });
