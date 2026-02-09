import { Suspense } from "react";

import { useTheme } from "@/shared/utils/theme/useTheme";
import { classNames } from "@/shared/utils/classNames";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useUserData } from "@/entities/User";

import cls from "./ApplicationLayout.module.scss";
import { AppRouter } from "../../../Router";

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
