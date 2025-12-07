import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "entities/user";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface LoginByUsernameOptions {
  rejectValue: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, LoginByUsernameOptions>(`login/loginByUsername`, async ({ username, password }, thunkApi) => {
  try {
    const response = await axios.post(`http://localhost:8000/login`, {
      username, password,
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);

    return thunkApi.rejectWithValue(`error`);
  }
});
