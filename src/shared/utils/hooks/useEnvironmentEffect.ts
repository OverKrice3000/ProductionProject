import { useEffect } from "react";

export const useEnvironmentEffect = (callback: () => void, dispose?: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== `storybook` && __PROJECT__ !== `jest`) {
      callback();

      return dispose;
    }
  }, [callback, dispose]);
};
