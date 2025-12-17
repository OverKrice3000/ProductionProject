import type { DeepPartial } from "shared/types/types";
import type { ProfileSchema } from "entities/profile/model/types/profile";
import { ValidateProfileError } from "entities/profile/model/types/profile";
import { profileActions, profileReducer, updateProfileData } from "entities/profile";
import { testDefaultProfile, testMultipleErrorsProfile } from "entities/profile/model/constants/tests/constants";

describe(`profileSlice`, () => {
  test(`setReadonly`, () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test(`cancelEdit`, () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: [ValidateProfileError.NO_DATA],
      form: testMultipleErrorsProfile,
      data: testDefaultProfile,
    };

    const updatedState = profileReducer(state as ProfileSchema, profileActions.cancelEdit());

    expect(updatedState.readonly).toBe(true);
    expect(updatedState.validateErrors).toBe(undefined);
    expect(updatedState.form).toEqual(updatedState.data);
    expect(updatedState.form).toEqual(testDefaultProfile);
  });

  test(`updateProfile`, () => {
    const state: DeepPartial<ProfileSchema> = {
      form: testDefaultProfile,
    };

    const updatedProfile = {
      ...testDefaultProfile,
      username: `changedUsername`,
    };
    const updatedState = profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: `changedUsername` }));

    expect(updatedState.form).toEqual(updatedProfile);
  });

  test(`updateProfileData pending state`, () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.NO_DATA],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
    });
  });
});
