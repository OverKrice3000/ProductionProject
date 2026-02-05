import { counterReducer } from "../..";
import { counterActions } from "./counterSlice";
import type { CounterSchema } from "../types/counterSchema";

describe(`Counter slice`, () => {
  test(`increment`, () => {
    const value = 2;
    const state: CounterSchema = {
      value,
    };

    expect(counterReducer(state, counterActions.increment)).toEqual({ value: value + 1 });
  });

  test(`decrement`, () => {
    const value = 2;
    const state: CounterSchema = {
      value,
    };

    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: value - 1 });
  });

  test(`empty state`, () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
