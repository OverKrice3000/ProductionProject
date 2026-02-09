import type { DeepPartial } from "@/shared/types/types";

import type { LoginRootSchema } from "../../types/loginSchema";

export const getIsLoading = (state: DeepPartial<LoginRootSchema>) => state.login?.isLoading ?? false;
