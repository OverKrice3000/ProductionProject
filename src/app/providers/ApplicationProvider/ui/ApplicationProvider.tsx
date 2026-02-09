import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/shared/utils/theme/ThemeProvider";

import { ApplicationErrorBoundary } from '../../../layouts/ErrorLayout/ui/ApplicationErrorBoundary';
import { StateProvider } from '../../StateProvider';

import type { ReactNode } from "react";

interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationProvider = (props: ApplicationProviderProps) => {
  const { children } = props;
  return (
      <BrowserRouter>
        <StateProvider>
          <Suspense fallback={``}>
            <ApplicationErrorBoundary>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </ApplicationErrorBoundary>
          </Suspense>
        </StateProvider>
      </BrowserRouter>
  );
};
