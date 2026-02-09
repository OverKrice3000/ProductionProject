import { getCounter } from "./getCounter";

import type { CounterRootSchema } from "../../..";

describe(`getCounter`, () => {
  test(`Should return counter value`, () => {
    const value = 2;

    const state: CounterRootSchema = {
      counter: {
        value,
      },
    };

    expect(getCounter(state)).toEqual({ value });
  });
});
