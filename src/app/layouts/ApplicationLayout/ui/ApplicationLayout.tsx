import { Suspense } from "react";

import { useTheme } from "@/shared/utils/theme/useTheme";
import { classNames } from "@/shared/utils/classNames";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useUserData, useUserInitialized } from "@/entities/User";
import { PageLoader } from "@/pages/PageLoader";
import { ToggleFeatures } from "@/shared/utils/features";
import { MainLayout } from "@/shared/layouts";

import cls from "./ApplicationLayout.module.scss";
import { AppRouter } from "../../../Router";

export const ApplicationLayout = () => {
  const { theme } = useTheme();
  const userInitialized = useUserInitialized();

  useUserData();

  if (!userInitialized) {
    return (
      <div className={classNames(cls.applicationLayout, {}, [theme])}>
        <PageLoader />
      </div>
    );
  }

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <div className={classNames(cls.applicationLayout, {}, [theme])}>
          <Suspense fallback={``}>
            <MainLayout
              header={<Navbar />}
              sidebar={<Sidebar />}
              content={<AppRouter />}
              toolbar={<div>{`KEK`}</div>}
            />
          </Suspense>
        </div>
      }
      off={
        <div className={classNames(cls.applicationLayout, {}, [theme])}>
          <Suspense fallback={``}>
            <Navbar />
            <div className={cls.contentPage}>
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
};
