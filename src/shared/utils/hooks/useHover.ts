import { useCallback, useMemo, useState } from "react";

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback((event: MouseEvent) => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback((event: MouseEvent) => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => ({
      isHover,
      bindHover: [onMouseEnter, onMouseLeave],
    }),
    [isHover, onMouseEnter, onMouseLeave],
  );
};
