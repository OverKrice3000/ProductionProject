import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/stateProvider/config/store";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

interface StateProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StateProvider = ({ children, initialState, asyncReducers }: StateProviderProps) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
