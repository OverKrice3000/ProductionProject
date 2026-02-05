import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "../../..";
import { getProfileData } from "../../..";
import { testDefaultProfile } from "../../constants/tests/profile";

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
