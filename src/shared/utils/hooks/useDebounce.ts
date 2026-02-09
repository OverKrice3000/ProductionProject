import { useCallback, useRef } from "react";

import type { MutableRefObject } from "react";

export const useDebounce = <CallbackArguments extends unknown[]>(
  action: (...args: CallbackArguments) => void,
  delay: number,
) => {
  const timer = useRef() as MutableRefObject<NodeJS.Timer>;

  return useCallback(
    (...args: CallbackArguments) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        action(...args);
      }, delay);
    },
    [action, delay],
  );
};
