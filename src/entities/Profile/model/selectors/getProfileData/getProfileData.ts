import type { ProfileRootSchema } from "../../..";

export const getProfileData = (state: ProfileRootSchema) => state.profile?.data;
