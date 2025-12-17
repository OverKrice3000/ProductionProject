import type { ProfileRootSchema } from "entities/profile";

export const getProfileForm = (state: ProfileRootSchema) => state?.profile?.form;
