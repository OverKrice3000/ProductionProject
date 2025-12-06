import { createSlice } from '@reduxjs/toolkit';
import type { UserSchema } from "entities/user/model/types/userSchema";

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
