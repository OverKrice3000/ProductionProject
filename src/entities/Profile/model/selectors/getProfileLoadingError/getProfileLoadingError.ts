import type { ProfileRootSchema } from "../../..";

export const getProfileLoadingError = (state: ProfileRootSchema) => state.profile?.loadingError;
