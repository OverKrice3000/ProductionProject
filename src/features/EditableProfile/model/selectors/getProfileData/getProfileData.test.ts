import type { DeepPartial } from "@/shared/types/types";

import { testDefaultProfile } from "../../../../../entities/Profile/model/testData/profile";
import { getProfileData } from "./getProfileData";

import type { ProfileRootSchema } from "../../types/editableProfile";

describe(`getProfileData`, () => {
  test(`should return profile`, () => {
    const state: DeepPartial<ProfileRootSchema> = {
      profile: {
        data: testDefaultProfile,
      },
    };

    expect(getProfileData(state as ProfileRootSchema)).toEqual(testDefaultProfile);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getProfileData(state as ProfileRootSchema)).toEqual(undefined);
  });
});
