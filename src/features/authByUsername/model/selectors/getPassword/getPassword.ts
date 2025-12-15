import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";
import type { DeepPartial } from "shared/types/types";

export const getPassword = (state: DeepPartial<LoginRootSchema>) => state.login?.password ?? ``;
