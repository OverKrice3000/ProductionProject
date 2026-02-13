import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkConfig } from "@/app/providers/StateProvider";

import { getAuthData } from "../selector/user/userSelectors";
import { setJsonSettingsMutation } from "../../api/userApi";
import { getJsonSettings } from "../selector/jsonSettings/jsonSettingsSelectors";

import type { JsonSettings } from "../types/jsonSettings";

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>(
  `user/saveJsonSettings`,
  async (jsonSettings, { extra, rejectWithValue, getState, dispatch }) => {
    try {
      const userData = getAuthData(getState());
      const currentJsonSettings = getJsonSettings(getState());

      if (!userData) {
        return rejectWithValue(`JsonSettingsUpdateError`);
      }

      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentJsonSettings,
            ...jsonSettings,
          },
        }),
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue(`JsonSettingsUpdateError`);
      }

      return response.jsonSettings;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`JsonSettingsUpdateError`);
    }
  },
);
