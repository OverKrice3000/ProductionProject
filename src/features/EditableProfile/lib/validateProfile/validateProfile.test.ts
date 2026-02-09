import { validateProfile } from "./validateProfile";
import {
  testDefaultProfile,
  testEmptyCountryProfile,
  testEmptyFirstLastNameProfile,
  testInvalidAgeProfile,
  testMultipleErrorsProfile,
} from "../../../../entities/Profile/model/testData/profile";
import { ValidateProfileError } from "../../model/types/editableProfile";

describe(`validateProfile`, () => {
  test(`should return no error on valid data`, () => {
    const result = validateProfile(testDefaultProfile);

    expect(result).toEqual([]);
  });
  test(`should return empty firstname lastname error`, () => {
    const result = validateProfile(testEmptyFirstLastNameProfile);

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test(`should return incorrect age error`, () => {
    const result = validateProfile(testInvalidAgeProfile);

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test(`should return empty country error`, () => {
    const result = validateProfile(testEmptyCountryProfile);

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test(`should return multiple errors`, () => {
    const result = validateProfile(testMultipleErrorsProfile);

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
