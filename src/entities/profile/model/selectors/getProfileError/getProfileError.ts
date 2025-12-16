import type { ProfileRootSchema } from "entities/profile";

export const getProfileError = (state: ProfileRootSchema) => state.profile?.error;
