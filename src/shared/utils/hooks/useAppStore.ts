import type { StoreWithReducerManager } from "src/app/providers/StateProvider";
import { useStore } from "react-redux";

export const useAppStore = () => {
  return useStore() as StoreWithReducerManager;
};
