import { ErrorBoundary } from "react-error-boundary";
import type { ReactNode } from "react";
import { ErrorLayout } from "./ErrorLayout";

interface ApplicationErrorBoundaryProps {
  children: ReactNode;
}

export const ApplicationErrorBoundary = (props: ApplicationErrorBoundaryProps) => {
  const { children } = props;

  return (
      <ErrorBoundary fallback={<ErrorLayout />}>
        {children}
      </ErrorBoundary>
  );
};
