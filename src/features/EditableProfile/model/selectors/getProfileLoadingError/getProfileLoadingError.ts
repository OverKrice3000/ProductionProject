import type { ProfileRootSchema } from "../../types/editableProfile";

export const getProfileLoadingError = (state: ProfileRootSchema) => state.profile?.loadingError;
