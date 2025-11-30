import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApplicationErrorBoundary } from "app/layouts/ErrorLayout/ui/ApplicationErrorBoundary";
import { ThemeProvider } from "shared/utils/theme/ThemeProvider";

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
