import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ForceUpdateProvider } from "@/shared/utils/render/ForceUpdate";

import { ThemeProvider } from "../../ThemeProvider/ui/ThemeProvider";
import { ApplicationErrorBoundary } from "../../../layouts/ErrorLayout/ui/ApplicationErrorBoundary";
import { StateProvider } from "../../StateProvider";

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
              <ForceUpdateProvider>{children}</ForceUpdateProvider>
            </ThemeProvider>
          </ApplicationErrorBoundary>
        </Suspense>
      </StateProvider>
    </BrowserRouter>
  );
};
