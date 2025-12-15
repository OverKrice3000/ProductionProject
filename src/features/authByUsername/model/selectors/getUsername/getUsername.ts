import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";
import type { DeepPartial } from "shared/types/types";

export const getUsername = (state: DeepPartial<LoginRootSchema>) => state.login?.username ?? ``;
