import type { LoginRootSchema } from "../../types/loginSchema";
import type { DeepPartial } from "@/shared/types/types";

export const getPassword = (state: DeepPartial<LoginRootSchema>) => state.login?.password ?? ``;
