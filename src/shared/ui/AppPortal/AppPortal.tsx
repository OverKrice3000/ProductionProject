import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface AppPortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const AppPortal = ({ children, container }: AppPortalProps) => {
  const targetContainer = (__PROJECT__ === `storybook`
    ? container ?? document.getElementById(`storybook-root`)
    : container ?? document.getElementById(`root`)) ?? document.body;

  return createPortal(children, targetContainer);
};
