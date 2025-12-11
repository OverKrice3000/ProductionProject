import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";

export const getIsLoading = (state: LoginRootSchema) => state.login?.isLoading ?? false;
