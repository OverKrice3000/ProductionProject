import type { MutableRefObject } from "react";
import { useCallback } from "react";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) => {
  useEnvironmentEffect(useCallback(() => {
    if (!callback) {
      return;
    }

    const options = {
      root: wrapperRef.current,
      rootMargin: `0px`,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    const triggerObject = triggerRef.current;
    observer.observe(triggerObject);

    return () => {
      observer.unobserve(triggerObject);
    };
  }, [callback, triggerRef, wrapperRef]));
};
