import { useEffect } from "react";

export const useEnvironmentEffect = (callback: () => void, dispose?: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== `storybook`) {
      callback();

      return dispose;
    }
  }, [callback, dispose]);
};
