import { StateProvider } from "./ui/StateProvider";
import { createReduxStore } from "./config/store";
import { StateDecorator } from "./decorator/StateDecorator";

import type { AppDispatch } from "./config/store";
import type {
  StateSchema,
  StoreWithReducerManager,
  ThunkExtraArgument,
  ThunkConfig,
  SliceName,
} from "./config/stateSchema";

export {
  StateProvider,
  StateDecorator,
  createReduxStore,
  StateSchema,
  StoreWithReducerManager,
  AppDispatch,
  ThunkExtraArgument,
  ThunkConfig,
  SliceName,
};
