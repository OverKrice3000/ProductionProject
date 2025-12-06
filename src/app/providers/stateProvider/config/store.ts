import type { ReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";

export const createReduxStore = (initialState?: StateSchema) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
};
