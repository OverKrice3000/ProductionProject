import type { ProfileRootSchema } from "../../..";

export const getProfileIsLoading = (state: ProfileRootSchema) => state.profile?.isLoading ?? false;
