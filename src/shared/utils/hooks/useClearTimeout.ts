import { MutableRefObject, useEffect } from "react";

export const useClearTimeoutEffect = (timeoutRef: MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [timeoutRef]);
};
