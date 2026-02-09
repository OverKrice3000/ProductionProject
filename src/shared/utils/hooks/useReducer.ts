import { useEffect } from "react";

import type { SliceName } from "@/app/providers/StateProvider";

import { useAppDispatch } from "./useAppDispatch";
import { useAppStore } from "./useAppStore";

import type { Reducer } from "@reduxjs/toolkit";

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
