import { useEffect } from "react";
import type { SliceName } from "app/providers/stateProvider/config/stateSchema";
import type { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useAppStore } from "shared/utils/hooks/useAppStore";

export const useReducer = (key: SliceName, reducer: Reducer) => {
  const store = useAppStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.reducerManager.add(key, reducer);
    dispatch({ type: `@INIT ${key} reducer` });

    return () => {
      store.reducerManager.remove(key);
      dispatch({ type: `@REMOVE ${key} reducer` });
    };
  }, [dispatch, key, reducer, store]);
};
