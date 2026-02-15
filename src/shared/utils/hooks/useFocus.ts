import { useCallback, useMemo, useState } from "react";

export const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return useMemo(
    () => ({
      isFocus,
      bindFocus: { onFocus, onBlur },
    }),
    [isFocus, onBlur, onFocus],
  );
};
