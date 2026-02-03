import { createContext } from "react";
import type { AppPageContextProps } from "shared/ui/appPage/ui/AppPage/context/types";

const tempDiv = document.createElement(`div`);
export const AppPageContext = createContext<AppPageContextProps>({
  wrapperRef: { current: tempDiv },
  triggerRef: { current: tempDiv },
});
