import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";

export const getPassword = (state: LoginRootSchema) => state.login?.password ?? ``;
