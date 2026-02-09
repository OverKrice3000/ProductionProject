import { useStore } from "react-redux";

import type { StoreWithReducerManager } from "@/app/providers/StateProvider";

export const useAppStore = () => {
  return useStore() as StoreWithReducerManager;
};
