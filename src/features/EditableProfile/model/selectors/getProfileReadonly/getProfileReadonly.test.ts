import type { DeepPartial } from "@/shared/types/types";
import { testDefaultProfile } from "../../../../../entities/Profile/model/testData/profile";
import type { ProfileRootSchema } from "../../types/editableProfile";
import { getProfileForm } from "../getProfileForm/getProfileForm";

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
