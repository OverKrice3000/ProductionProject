import type { DeepPartial } from "shared/types/types";
import type { LoginRootSchema } from "features/authByUsername";
import { getPassword } from "features/authByUsername/model/selectors/getPassword/getPassword";

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
