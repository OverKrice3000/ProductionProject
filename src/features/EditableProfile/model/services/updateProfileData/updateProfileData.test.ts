import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";
import { testDefaultProfile, testMultipleErrorsProfile } from "../../../../../entities/Profile/model/testData/profile";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/editableProfile";

describe(`updateProfileData`, () => {
  test(`successful profile update`, async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: testDefaultProfile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: testDefaultProfile }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual(testDefaultProfile);
  });

  test(`no data update error`, async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe(`rejected`);
    expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
  });

  test(`validation error`, async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: testMultipleErrorsProfile,
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe(`rejected`);
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test(`server error`, async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: testDefaultProfile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe(`rejected`);
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
