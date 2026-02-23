import { createSlice } from "@reduxjs/toolkit";

import { USER_LOCAL_STORAGE_KEY } from "@/shared/constants/localStorage";
import { setFeatureFlags } from "@/shared/utils/featureFlags";

import { initAuthData } from "../service/initAuthData";
import { saveJsonSettings } from "../service/saveJsonSettings";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserSchema } from "../types/userSchema";
import type { User } from "../..";

const initialState: UserSchema = {
  _userInitialized: false,
};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.featureFlags);
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, action) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      })
      .addCase(initAuthData.fulfilled, (state, action) => {
        state.authData = action.payload;
        setFeatureFlags(action.payload.featureFlags);
        state._userInitialized = true;
      })
      .addCase(initAuthData.rejected, (state, action) => {
        state._userInitialized = true;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
