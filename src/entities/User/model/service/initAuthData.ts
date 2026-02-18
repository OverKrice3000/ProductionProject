import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkConfig } from "@/app/providers/StateProvider";
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USER_LOCAL_STORAGE_KEY,
} from "@/shared/constants/localStorage";

import { getUserDataByIdQuery } from "../../api/userApi";

import type { User } from "../..";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  `user/initAuthData`,
  async (_, { extra, rejectWithValue, getState, dispatch }) => {
    try {
      const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (!userId) {
        return rejectWithValue(`InitAuthDataError`);
      }

      const response: User = await dispatch(
        getUserDataByIdQuery(userId),
      ).unwrap();

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.featureFlags?.isAppRedesigned ? `new` : `old`,
      );

      return response;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`InitAuthDataError`);
    }
  },
);
