import { buildSelector } from "@/shared/utils/store";

import type { UserRootSchema } from "../../..";

export const getAuthData = (state: UserRootSchema) => state.user.authData;
export const [useUserInitialized] = buildSelector(
  (state: UserRootSchema) => state.user._userInitialized,
);
