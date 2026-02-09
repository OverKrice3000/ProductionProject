import type { DeepPartial } from "@/shared/types/types";

import type { LoginRootSchema } from "../../types/loginSchema";

export const getError = (state: DeepPartial<LoginRootSchema>) =>
  state.login?.error;
