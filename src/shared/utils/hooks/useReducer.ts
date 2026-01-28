import { useEffect } from "react";
import { useStore } from "react-redux";
import type { StoreWithReducerManager } from "app/providers/stateProvider";
import type { SliceName } from "app/providers/stateProvider/config/stateSchema";
import type { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";

export const useReducer = (key: SliceName, reducer: Reducer) => {
  const store = useStore() as StoreWithReducerManager;
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
