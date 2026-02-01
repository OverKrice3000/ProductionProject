import { useEffect } from "react";
import type { SliceName } from "app/providers/stateProvider/config/stateSchema";
import type { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useAppStore } from "shared/utils/hooks/useAppStore";

export const useConstantReducer = (key: SliceName, reducer: Reducer, initState?: () => void) => {
  const store = useAppStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!store.reducerManager.has(key)) {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });

      if (__PROJECT__ !== `storybook`) {
        initState?.();
      }
    }
  }, [dispatch, initState, key, reducer, store]);
};
