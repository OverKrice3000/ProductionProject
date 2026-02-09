import { useContext } from "react";

import { AppPageContext } from "./context";

export const useAppPageWrapper = () => {
  const context = useContext(AppPageContext);
  if (!context) {
    throw new Error(`Hook must be used inside AppPage provider`);
  }
  return context.wrapperRef.current;
};

export const useAppPageTrigger = () => {
  const context = useContext(AppPageContext);
  if (!context) {
    throw new Error(`Hook must be used inside AppPage provider`);
  }
  return context.triggerRef.current;
};
