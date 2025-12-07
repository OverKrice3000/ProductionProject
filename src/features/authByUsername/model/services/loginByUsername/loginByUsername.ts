import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "entities/user";
import { userActions } from "entities/user";
import i18n from "i18next";
import { USER_LOCAL_STORAGE_KEY } from "shared/constants/localStorage";

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

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);

    return thunkApi.rejectWithValue(i18n.t(`IncorrectLoginOrPassword`));
  }
});
