import { createSlice } from "@reduxjs/toolkit";

import { USER_LOCAL_STORAGE_KEY } from "@/shared/constants/localStorage";
import { setFeatureFlags } from "@/shared/utils/features";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserSchema } from "../types/userSchema";
import type { User } from "../..";

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },

    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        const json = JSON.parse(user) as User;
        state.authData = json;
        setFeatureFlags(json.features);
      }
    },

    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
