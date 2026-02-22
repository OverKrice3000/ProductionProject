import { configureStore } from "@reduxjs/toolkit";

import { scrollReducer } from "@/widgets/AppPage";
import { userReducer } from "@/entities/User";
import type { Write } from "@/shared/types/types";
import { rtkApi } from "@/shared/api/rtkApi/rtkApi";

import { createReducerManager } from "./reducerManager";

import type { StateSchema, ThunkExtraArgument } from "./stateSchema";
import type { ReducersMapObject } from "@reduxjs/toolkit";

export const createReduxStore = (
  extraArgument: ThunkExtraArgument,
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const reducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scroll: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(reducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument },
      }).concat(rtkApi.middleware),
  });
  const storeWithReducerManager = store as Write<
    typeof store,
    {
      reducerManager: typeof reducerManager;
    }
  >;

  storeWithReducerManager.reducerManager = reducerManager;

  return storeWithReducerManager;
};

export type AppDispatch = ReturnType<typeof createReduxStore>[`dispatch`];
