import type { FeatureFlags } from "@/shared/types/featureFlags";

import type { JsonSettings } from "./jsonSettings";

export enum UserRole {
  ADMIN = `ADMIN`,
  USER = `USER`,
  MANAGER = `MANAGER`,
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  featureFlags?: FeatureFlags;
  roles?: UserRole[];
  jsonSettings?: JsonSettings;
}
