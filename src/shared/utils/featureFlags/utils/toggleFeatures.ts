import { getFeatureFlags } from "./setGetFeatures";

import type { FeatureFlags } from "../../../types/featureFlags";

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export const toggleFeatures = <T>({
  name,
  on,
  off,
}: ToggleFeaturesOptions<T>): T => {
  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
};
