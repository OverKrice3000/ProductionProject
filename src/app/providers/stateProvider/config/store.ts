import type { ReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { createReducerManager } from "app/providers/stateProvider/config/reducerManager";
import type { Write } from "shared/types/types";
import { $api } from "shared/api/api";
import type { NavigateOptions, To } from "react-router";

export const createReduxStore = (navigate: (to: To, options?: NavigateOptions) => void, initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  const reducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(reducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });
  const storeWithReducerManager = store as Write<typeof store, {
    reducerManager: typeof reducerManager;
  }>;

  storeWithReducerManager.reducerManager = reducerManager;

  return storeWithReducerManager;
};

export type AppDispatch = ReturnType<typeof createReduxStore>[`dispatch`];
