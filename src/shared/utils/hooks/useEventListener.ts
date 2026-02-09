import { useEffect } from "react";

export const useEventListener = <K extends keyof WindowEventMap>(
  key: K,
  listener: (this: Window, ev: WindowEventMap[K]) => void,
) => {
  useEffect(() => {
    window.addEventListener(key, listener);

    return () => {
      window.removeEventListener(key, listener);
    };
  }, [key, listener]);
};
