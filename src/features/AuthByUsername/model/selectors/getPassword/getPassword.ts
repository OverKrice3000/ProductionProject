import type { DeepPartial } from "@/shared/types/types";

import type { LoginRootSchema } from "../../types/loginSchema";

export const getPassword = (state: DeepPartial<LoginRootSchema>) =>
  state.login?.password ?? ``;
