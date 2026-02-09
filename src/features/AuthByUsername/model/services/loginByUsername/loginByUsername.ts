import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "@/entities/User";
import { userActions } from "@/entities/User";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/constants/localStorage";
import type { ThunkConfig } from "@/app/providers/stateProvider";
import type { AxiosResponse } from "axios";
import { RoutePath } from "@/shared/constants/router";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  `login/loginByUsername`,
  async ({ username, password },
    { extra, rejectWithValue, dispatch },
  ) => {
    try {
      const response = await extra.api.post<User, AxiosResponse<User>>(`/login`, { username, password });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      extra.navigate(`${RoutePath.profile}${response.data.id}`);

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue(`IncorrectLoginOrPassword`);
    }
  });
