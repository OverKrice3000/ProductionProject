import type { DeepPartial } from "shared/types/types";
import type { LoginRootSchema } from "../../..";
import { getUsername } from "./getUsername";

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
