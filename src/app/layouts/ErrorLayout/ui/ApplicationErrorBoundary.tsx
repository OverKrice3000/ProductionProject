import { ErrorBoundary } from "react-error-boundary";

import { ErrorLayout } from "./ErrorLayout";

import type { ReactNode } from "react";

interface ApplicationErrorBoundaryProps {
  children: ReactNode;
}

export const ApplicationErrorBoundary = (
  props: ApplicationErrorBoundaryProps,
) => {
  const { children } = props;

  return <ErrorBoundary fallback={<ErrorLayout />}>{children}</ErrorBoundary>;
};
