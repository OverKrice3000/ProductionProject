import { TestAsyncThunk } from "@/shared/config/tests/testAsyncThunk/testAsyncThunk";
import { testDefaultProfile } from "@/entities/Profile";

import { fetchProfileData } from "./fetchProfileData";

describe(`fetchProfileData`, () => {
  test(`successful profile fetch`, async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ data: testDefaultProfile }),
    );

    const result = await thunk.callThunk(`1`);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual(testDefaultProfile);
  });

  test(`fetch error`, async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(`1`);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
  });
});
