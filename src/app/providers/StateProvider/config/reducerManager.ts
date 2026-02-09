import type { AnyAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import type { CombinedStateSchema, SliceName, StateSchema } from './stateSchema';

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: AnyAction) => CombinedStateSchema;
  add: (key: SliceName, reducer: Reducer) => void;
  has: (key: SliceName) => boolean;
  remove: (key: SliceName) => void;
}

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };
  let keysToRemove: SliceName[] = [];

  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema | undefined, action: AnyAction) => {
      if (state && keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: SliceName, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    has: (key: SliceName) => key in reducers,

    remove: (key: SliceName) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
