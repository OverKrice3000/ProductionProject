import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface AppPortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const AppPortal = ({ children, container }: AppPortalProps) => {
  const targetContainer = container ?? document.getElementById(`root`) ?? document.body;

  return createPortal(children, targetContainer);
};
