import type { UserRootSchema } from "../../..";

export const getAuthData = (state: UserRootSchema) => state.user.authData;
