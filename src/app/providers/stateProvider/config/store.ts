import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { counterReducer } from "entities/counter";

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: initialState,
  devTools: __IS_DEV__,
});
