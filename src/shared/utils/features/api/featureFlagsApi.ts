import { rtkApi } from "../../../api/rtkApi/rtkApi";

import type { FeatureFlags } from "../../../types/featureFlags";

interface UpdateFeatureFlagsOptions {
  userId: string;
  featureFlags?: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
      query: ({ userId, featureFlags }) => ({
        url: `/users/${userId}`,
        method: `PATCH`,
        body: {
          featureFlags,
        },
      }),
    }),
  }),
});

export const useUpdateFeatureFlags =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate;
