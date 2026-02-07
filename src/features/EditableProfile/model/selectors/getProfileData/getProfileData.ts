import type { ProfileRootSchema } from "../../types/editableProfile";

export const getProfileData = (state: ProfileRootSchema) => state.profile?.data;
