import type { ProfileRootSchema } from "../../types/editableProfile";

export const getProfileForm = (state: ProfileRootSchema) =>
  state?.profile?.form;
