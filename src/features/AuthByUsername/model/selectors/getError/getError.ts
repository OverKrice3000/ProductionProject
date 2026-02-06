import type { LoginRootSchema } from "../../types/loginSchema";
import type { DeepPartial } from "shared/types/types";

export const getError = (state: DeepPartial<LoginRootSchema>) => state.login?.error;
