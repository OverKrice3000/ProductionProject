import type { StoreWithReducerManager } from "app/providers/stateProvider";
import { useStore } from "react-redux";

export const useAppStore = () => {
  return useStore() as StoreWithReducerManager;
};
