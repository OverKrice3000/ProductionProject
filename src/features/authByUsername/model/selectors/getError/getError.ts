import { createSelector } from "@reduxjs/toolkit";
import type { LoginSchema } from "features/authByUsername/model/types/loginSchema";
import { getLoginState } from "features/authByUsername/model/selectors/getLoginState/getLoginState";

export const getError = createSelector(getLoginState, (state: LoginSchema) => state.error);
