import { useSelector } from "react-redux";

import type { StateSchema } from "@/app/providers/StateProvider";

type Selector<T, Arguments extends unknown[]> = (
  state: StateSchema,
  ...args: Arguments
) => T;
type Result<T, Arguments extends unknown[]> = [
  (...args: Arguments) => T,
  Selector<T, Arguments>,
];

export const buildSelector = <T, Arguments extends unknown[]>(
  selector: Selector<T, Arguments>,
): Result<T, Arguments> => {
  const useSelectorHook = (...args: Arguments) => {
    return useSelector((state: StateSchema) => selector(state, ...args));
  };

  return [useSelectorHook, selector];
};
