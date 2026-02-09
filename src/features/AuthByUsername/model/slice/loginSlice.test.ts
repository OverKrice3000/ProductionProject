import type { DeepPartial } from "@/shared/types/types";

import { loginActions, loginReducer } from "./loginSlice";

import type { LoginSchema } from "../types/loginSchema";

describe(`loginSlice`, () => {
  test(`set username`, () => {
    const state: DeepPartial<LoginSchema> = { username: `` };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername(`username`)),
    ).toEqual({ username: `username` });
  });

  test(`set password`, () => {
    const state: DeepPartial<LoginSchema> = { password: `` };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword(`password`)),
    ).toEqual({ password: `password` });
  });
});
