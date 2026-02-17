import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkConfig } from "@/app/providers/StateProvider";

import { useUpdateFeatureFlags } from "../api/featureFlagsApi";
import { getAllFeatureFlags } from "../utils/setGetFeatures";

import type { FeatureFlags } from "../../../types/featureFlags";

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
  void,
  UpdateFeatureFlagOptions,
  ThunkConfig<string>
>(`shared/updateFeatureFlags`, async ({ userId, newFeatures }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  try {
    await dispatch(
      useUpdateFeatureFlags({
        userId,
        featureFlags: {
          ...getAllFeatureFlags(),
          ...newFeatures,
        },
      }),
    );

    window.location.reload();
    return undefined;
  } catch (e) {
    console.log(e);
    return rejectWithValue(`FeatureFlagsUpdateError`);
  }
});
