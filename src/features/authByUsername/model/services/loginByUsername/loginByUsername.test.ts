import axios from "axios";
import { loginByUsername } from "features/authByUsername/model/services/loginByUsername/loginByUsername";
import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";

jest.mock(`axios`);

const mockedAxios = jest.mocked(axios, true);

describe(`loginByUsername`, () => {
  test(`successful login`, async () => {
    const user = {
      id: `1`,
      username: `username`,
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: `username`,
      password: `password`,
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(user);
  });

  test(`forbidden login`, async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: `username`,
      password: `password`,
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(`IncorrectLoginOrPassword`);
  });
});
