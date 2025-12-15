import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";
import type { DeepPartial } from "shared/types/types";

export const getError = (state: DeepPartial<LoginRootSchema>) => state.login?.error;
