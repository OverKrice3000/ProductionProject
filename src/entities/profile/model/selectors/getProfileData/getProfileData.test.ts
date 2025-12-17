import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "entities/profile";
import { getProfileData } from "entities/profile";
import { testDefaultProfile } from "entities/profile/model/constants/tests/constants";

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
