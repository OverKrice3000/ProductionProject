import type { ProfileRootSchema } from "entities/profile";

export const getProfileData = (state: ProfileRootSchema) => state.profile?.data;
