import { userActions } from "@/entities/User";
import { TestAsyncThunk } from "@/shared/config/tests/testAsyncThunk/testAsyncThunk";

import { loginByUsername } from "./loginByUsername";

describe(`loginByUsername`, () => {
  test(`successful login`, async () => {
    const user = {
      id: `1`,
      username: `username`,
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: user }));

    const result = await thunk.callThunk({
      username: `username`,
      password: `password`,
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(user);
  });

  test(`forbidden login`, async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: `username`,
      password: `password`,
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(`IncorrectLoginOrPassword`);
  });
});
