import type { ProfileRootSchema } from "entities/profile";

export const getProfileReadonly = (state: ProfileRootSchema) => state.profile?.readonly;
