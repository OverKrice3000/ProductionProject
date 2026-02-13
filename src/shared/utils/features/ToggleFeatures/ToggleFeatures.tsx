import { getFeatureFlags } from "../setGetFeatures";

import type { ReactElement } from "react";
import type { FeatureFlags } from "../../../types/featureFlags";

interface ToggleFeaturesOptions {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = ({ name, on, off }: ToggleFeaturesOptions) => {
  if (getFeatureFlags(name)) {
    return on;
  }

  return off;
};
