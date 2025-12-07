import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";

export const getLoginState = (state: LoginRootSchema) => state.login;
