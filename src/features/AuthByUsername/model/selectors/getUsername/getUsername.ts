import type { DeepPartial } from "@/shared/types/types";

import type { LoginRootSchema } from "../../types/loginSchema";

export const getUsername = (state: DeepPartial<LoginRootSchema>) =>
  state.login?.username ?? ``;
