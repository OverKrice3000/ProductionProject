import type { ProfileRootSchema } from "../../types/editableProfile";

export const getProfileIsLoading = (state: ProfileRootSchema) =>
  state.profile?.isLoading ?? false;
