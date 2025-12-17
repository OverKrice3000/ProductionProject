import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";
import { fetchProfileData } from "entities/profile";
import { testDefaultProfile } from "entities/profile/model/constants/tests/constants";

describe(`fetchProfileData`, () => {
  test(`successful profile fetch`, async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: testDefaultProfile }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual(testDefaultProfile);
  });

  test(`fetch error`, async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
  });
});
