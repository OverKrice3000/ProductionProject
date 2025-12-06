import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface AppPortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const AppPortal = ({ children, container = document.body }: AppPortalProps) => {
  return createPortal(children, container);
};
