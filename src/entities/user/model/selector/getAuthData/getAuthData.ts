import type { UserRootSchema } from "entities/user";

export const getAuthData = (state: UserRootSchema) => state.user.authData;
