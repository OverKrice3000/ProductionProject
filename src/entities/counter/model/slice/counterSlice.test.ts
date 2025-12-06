import { counterReducer } from "entities/counter";
import { counterActions } from "entities/counter/model/slice/counterSlice";
import type { CounterSchema } from "entities/counter/model/types/counterSchema";

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
