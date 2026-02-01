import { useEffect } from "react";
import { useStore } from "react-redux";
import type { StoreWithReducerManager } from "app/providers/stateProvider";
import type { SliceName } from "app/providers/stateProvider/config/stateSchema";
import type { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";

export const useConstantReducer = (key: SliceName, reducer: Reducer, initState?: () => void) => {
  const store = useStore() as StoreWithReducerManager;
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
