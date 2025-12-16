import type { ProfileRootSchema } from "entities/profile";

export const getProfileIsLoading = (state: ProfileRootSchema) => state.profile?.isLoading ?? false;
