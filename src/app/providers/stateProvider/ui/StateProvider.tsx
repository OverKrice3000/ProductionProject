import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/stateProvider/config/store";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import type { DeepPartial } from "@reduxjs/toolkit";

interface StateProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StateProvider = ({ children, initialState }: StateProviderProps) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
