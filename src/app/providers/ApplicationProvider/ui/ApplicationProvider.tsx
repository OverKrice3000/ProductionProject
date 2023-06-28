import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ApplicationErrorBoundary } from "app/layouts/ErrorLayout/ui/ApplicationErrorBoundary";

interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationProvider = (props: ApplicationProviderProps) => {
  const { children } = props;
  return (
      <BrowserRouter>
        <Suspense fallback={``}>
          <ApplicationErrorBoundary>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ApplicationErrorBoundary>
        </Suspense>
      </BrowserRouter>
  );
};
