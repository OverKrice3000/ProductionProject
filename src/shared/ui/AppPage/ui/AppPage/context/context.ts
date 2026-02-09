import { createContext } from "react";

import type { AppPageContextProps } from "./types";

const tempDiv = document.createElement(`div`);
export const AppPageContext = createContext<AppPageContextProps>({
  wrapperRef: { current: tempDiv },
  triggerRef: { current: tempDiv },
});
