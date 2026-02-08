import type { LoginRootSchema } from "../../types/loginSchema";
import type { DeepPartial } from "@/shared/types/types";

export const getUsername = (state: DeepPartial<LoginRootSchema>) => state.login?.username ?? ``;
