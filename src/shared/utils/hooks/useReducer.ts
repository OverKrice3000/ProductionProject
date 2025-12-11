import { useEffect } from "react";
import { useStore } from "react-redux";
import type { StoreWithReducerManager } from "app/providers/stateProvider";
import type { SliceName } from "app/providers/stateProvider/config/stateSchema";
import type { Reducer } from "@reduxjs/toolkit";

export const useReducer = (key: SliceName, reducer: Reducer) => {
  const store = useStore() as StoreWithReducerManager;

  useEffect(() => {
    store.reducerManager.add(key, reducer);

    return () => {
      store.reducerManager.remove(key);
    };
  }, [key, reducer, store]);
};
