import { useCallback, useRef } from "react";

export const useThrottle = <CallbackArguments extends unknown[]>(action: (...args: CallbackArguments) => void, delay: number) => {
  const throttleActiveRef = useRef(false);

  return useCallback((...args: CallbackArguments) => {
    if (throttleActiveRef.current) {
      return;
    }

    throttleActiveRef.current = true;
    setTimeout(() => {
      throttleActiveRef.current = false;
    }, delay);

    action(...args);
  }, [action, delay]);
};
