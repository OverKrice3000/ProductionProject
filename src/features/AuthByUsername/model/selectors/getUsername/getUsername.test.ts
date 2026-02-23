import type { DeepPartial } from "@/shared/types/types";

import { getUsername } from "./getUsername";

import type { LoginRootSchema } from "../../types/loginSchema";

describe(`getUsername`, () => {
  test(``, () => {
    const state: DeepPartial<LoginRootSchema> = {
      login: {
        username: `username`,
      },
    };

    expect(getUsername(state)).toEqual(`username`);
  });

  test(`should return empty string with empty state`, () => {
    const state: DeepPartial<LoginRootSchema> = {};

    expect(getUsername(state)).toEqual(``);
  });
});
