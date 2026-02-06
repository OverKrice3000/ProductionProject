import type { ProfileRootSchema } from "../../..";

export const getProfileValidationErrors = (state: ProfileRootSchema) => state.profile?.validateErrors;
