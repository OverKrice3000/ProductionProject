import type { ProfileRootSchema } from "../../types/editableProfile";

export const getProfileReadonly = (state: ProfileRootSchema) =>
  state.profile?.readonly;
