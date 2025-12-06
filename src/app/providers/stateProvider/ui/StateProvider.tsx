import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/stateProvider/config/store";
import { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

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
