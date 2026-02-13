import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkConfig } from "@/app/providers/StateProvider";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/constants/localStorage";

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

      return await dispatch(getUserDataByIdQuery(userId)).unwrap();
    } catch (e) {
      console.log(e);

      return rejectWithValue(`InitAuthDataError`);
    }
  },
);
