import { useTheme } from "shared/utils/theme/useTheme";
import { classNames } from "shared/utils/classNames";
import { AppRouter } from "app/Router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import cls from "./ApplicationLayout.module.scss";

export const ApplicationLayout = () => {
  const { theme } = useTheme();

  return (
        <div className={classNames(cls.applicationLayout, {}, [theme])}>
          <Suspense fallback={``}>
            <Navbar />
            <div className={cls.contentPage}>
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
  );
};
