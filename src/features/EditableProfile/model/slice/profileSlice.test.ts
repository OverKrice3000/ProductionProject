import type { DeepPartial } from "shared/types/types";
import { testDefaultProfile, testMultipleErrorsProfile } from "../../../../entities/Profile/model/testData/profile";
import type { ProfileSchema } from "../types/editableProfile";
import { ValidateProfileError } from "../types/editableProfile";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

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
