import { useMemo, useEffect } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router";

import type { DeepPartial } from "@/shared/types/types";
import { $api } from "@/shared/api/api";

import { createReduxStore } from "../config/store";

import type { ReactNode } from "react";
import type { StateSchema } from "../config/stateSchema";
import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { NavigateOptions, To } from "react-router";

interface StateProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const extraArgument = {
  api: $api,
  navigate: (_to: To, _options?: NavigateOptions) => {},
};

export const StateProvider = ({
  children,
  initialState,
  asyncReducers,
}: StateProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    extraArgument.navigate = navigate;
  }, [navigate]);

  const store = useMemo(() => {
    return createReduxStore(
      extraArgument,
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
    );
  }, [asyncReducers, initialState]);

  return <Provider store={store}>{children}</Provider>;
};
