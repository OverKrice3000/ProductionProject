import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/stateProvider/config/store";
import { StateSchema } from "app/providers/stateProvider/config/stateSchema";

interface StateProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StateProvider = ({ children, initialState }: StateProviderProps) => {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
