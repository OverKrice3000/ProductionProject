import type { ProfileRootSchema } from "../../..";

export const getProfileForm = (state: ProfileRootSchema) => state?.profile?.form;
