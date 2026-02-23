import type { DeepPartial } from "@/shared/types/types";

import { getPassword } from "./getPassword";

import type { LoginRootSchema } from "../../types/loginSchema";

describe(`getPassword`, () => {
  test(``, () => {
    const state: DeepPartial<LoginRootSchema> = {
      login: {
        password: `password`,
      },
    };

    expect(getPassword(state)).toEqual(`password`);
  });

  test(`should return empty string with empty state`, () => {
    const state: DeepPartial<LoginRootSchema> = {};

    expect(getPassword(state)).toEqual(``);
  });
});
