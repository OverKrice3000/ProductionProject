import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserSchema } from "entities/user/model/types/userSchema";
import type { User } from "entities/user";
import { USER_LOCAL_STORAGE_KEY } from "shared/constants/localStorage";

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
