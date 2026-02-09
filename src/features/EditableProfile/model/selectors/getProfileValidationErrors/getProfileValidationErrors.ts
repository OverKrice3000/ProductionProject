import type { ProfileRootSchema } from "../../types/editableProfile";

export const getProfileValidationErrors = (state: ProfileRootSchema) =>
  state.profile?.validateErrors;
