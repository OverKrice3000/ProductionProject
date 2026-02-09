import type { StoreWithReducerManager } from "@/app/providers/StateProvider";
import { useStore } from "react-redux";

export const useAppStore = () => {
  return useStore() as StoreWithReducerManager;
};
