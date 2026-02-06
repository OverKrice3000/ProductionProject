import { useTheme } from "shared/utils/theme/useTheme";
import { classNames } from "shared/utils/classNames";
import { AppRouter } from "app/Router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import cls from "./ApplicationLayout.module.scss";
import { useUserData } from "entities/User/model/hooks/useUserData";

export const ApplicationLayout = () => {
  const { theme } = useTheme();
  useUserData();

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
