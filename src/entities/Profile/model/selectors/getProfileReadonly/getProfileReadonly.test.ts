import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "../../..";
import { getProfileForm } from "../../..";
import { testDefaultProfile } from "../../constants/tests/profile";

describe(`getProfileData`, () => {
  test(`should return profile`, () => {
    const state: DeepPartial<ProfileRootSchema> = {
      profile: {
        form: testDefaultProfile,
      },
    };

    expect(getProfileForm(state as ProfileRootSchema)).toEqual(testDefaultProfile);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getProfileForm(state as ProfileRootSchema)).toEqual(undefined);
  });
});
