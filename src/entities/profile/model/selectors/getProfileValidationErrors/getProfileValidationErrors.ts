import type { ProfileRootSchema } from "entities/profile";

export const getProfileValidationErrors = (state: ProfileRootSchema) => state.profile?.validateErrors;
