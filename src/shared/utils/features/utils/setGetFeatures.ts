import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "../../../constants/localStorage";

import type { FeatureFlags } from "../../../types/featureFlags";

const defaultFeatures: FeatureFlags = {
  isAppRedesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === `new`,
};

let featureFlags: FeatureFlags = {
  ...defaultFeatures,
};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) =>
  featureFlags[flag] ?? false;

export const getAllFeatureFlags = () => featureFlags;
