import { createPortal } from "react-dom";

import type { ReactNode } from "react";

interface AppPortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

/**
 * @deprecated
 */
export const AppPortal = ({ children, container }: AppPortalProps) => {
  const targetContainer =
    container ?? document.getElementById(`app-wrapper`) ?? document.body;

  return createPortal(children, targetContainer);
};
