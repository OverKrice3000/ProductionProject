import type { DeepPartial } from "@/shared/types/types";
import type { ProfileRootSchema } from "../../types/editableProfile";
import { ValidateProfileError } from "../../types/editableProfile";
import {
  getProfileValidationErrors,
} from "./getProfileValidationErrors";

describe(`getProfileData`, () => {
  test(`should return profile`, () => {
    const state: DeepPartial<ProfileRootSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.SERVER_ERROR],
      },
    };

    expect(getProfileValidationErrors(state as ProfileRootSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getProfileValidationErrors(state as ProfileRootSchema)).toEqual(undefined);
  });
});
