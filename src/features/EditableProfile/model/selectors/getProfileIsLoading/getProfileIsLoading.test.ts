import type { DeepPartial } from "@/shared/types/types";

import { getProfileReadonly } from "../getProfileReadonly/getProfileReadonly";

import type { ProfileRootSchema } from "../../types/editableProfile";

describe(`getProfileReadonly`, () => {
  test(`should return readonly`, () => {
    const state: DeepPartial<ProfileRootSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as ProfileRootSchema)).toBe(true);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getProfileReadonly(state as ProfileRootSchema)).toBe(undefined);
  });
});
