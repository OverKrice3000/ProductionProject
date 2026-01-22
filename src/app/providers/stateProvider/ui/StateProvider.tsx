import type { ReactNode } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/stateProvider/config/store";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { DeepPartial } from "shared/types/types";
import type { NavigateOptions, To } from "react-router";
import { useNavigate } from "react-router";
import { $api } from "shared/api/api";

interface StateProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const extraArgument = {
  api: $api,
  navigate: (_to: To, _options?: NavigateOptions) => {},
};

export const StateProvider = ({ children, initialState, asyncReducers }: StateProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    extraArgument.navigate = navigate;
  }, [navigate]);

  const store = createReduxStore(extraArgument, initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
