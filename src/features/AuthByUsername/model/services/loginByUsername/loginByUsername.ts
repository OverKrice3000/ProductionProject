import { createAsyncThunk } from "@reduxjs/toolkit";

import type { User } from "@/entities/User";
import { userActions } from "@/entities/User";
import type { ThunkConfig } from "@/app/providers/StateProvider";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

import type { AxiosResponse } from "axios";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  `login/loginByUsername`,
  async ({ username, password }, { extra, rejectWithValue, dispatch }) => {
    try {
      const response = await extra.api.post<User, AxiosResponse<User>>(
        `/login`,
        { username, password },
      );

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      extra.navigate(GetRoutePath[AppRoutes.PROFILE](response.data.id));

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`IncorrectLoginOrPassword`);
    }
  },
);
