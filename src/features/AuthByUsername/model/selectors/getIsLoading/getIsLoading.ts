import type { LoginRootSchema } from "../../types/loginSchema";
import type { DeepPartial } from "shared/types/types";

export const getIsLoading = (state: DeepPartial<LoginRootSchema>) => state.login?.isLoading ?? false;
