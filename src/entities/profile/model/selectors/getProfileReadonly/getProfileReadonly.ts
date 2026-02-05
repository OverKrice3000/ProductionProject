import type { ProfileRootSchema } from "../../..";

export const getProfileReadonly = (state: ProfileRootSchema) => state.profile?.readonly;
