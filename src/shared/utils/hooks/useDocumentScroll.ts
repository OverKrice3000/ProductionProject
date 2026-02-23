import { useState, useEffect, useCallback } from "react";

import { useDebounce } from "./useDebounce";

const scrollPositionThrottleDelay = 200;

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY || window.pageYOffset);
  }, []);
  const handleScrollThrottled = useDebounce(
    handleScroll,
    scrollPositionThrottleDelay,
  );

  useEffect(() => {
    handleScrollThrottled();

    window.addEventListener(`scroll`, handleScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener(`scroll`, handleScrollThrottled);
    };
  }, [handleScrollThrottled]);

  return scrollY;
};
