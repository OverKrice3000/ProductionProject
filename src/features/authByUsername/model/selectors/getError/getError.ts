import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";

export const getError = (state: LoginRootSchema) => state.login?.error ?? ``;
