import type { ProfileRootSchema } from "entities/profile";

export const getProfileLoadingError = (state: ProfileRootSchema) => state.profile?.loadingError;
