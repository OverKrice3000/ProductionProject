import { useTheme } from "shared/utils/theme/useTheme";
import { classNames } from "shared/utils/classNames";
import { AppRouter } from "app/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";

export const App = () => {
  const { theme } = useTheme();
  return (
        <div className={classNames(`app`, {}, [theme])}>
          <Suspense fallback={``}>
            <Navbar />
            <div className={`contentPage`}>
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
  );
};
