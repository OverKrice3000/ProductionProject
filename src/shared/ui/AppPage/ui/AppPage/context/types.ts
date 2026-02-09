import type { MutableRefObject } from "react";

export interface AppPageContextProps {
  wrapperRef: MutableRefObject<HTMLDivElement>;
  triggerRef: MutableRefObject<HTMLDivElement>;
}
