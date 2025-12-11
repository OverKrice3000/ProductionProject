import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";

export const getUsername = (state: LoginRootSchema) => state.login?.username ?? ``;
