import { Suspense } from "react";

import { classNames } from "@/shared/utils/classNames";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { ToggleFeatures } from "@/shared/utils/features";
import { MainLayout } from "@/shared/layouts";
import { ScrollToolbar } from "@/widgets/ScrollToolbar";

import cls from "./ApplicationLayout.module.scss";
import { AppRouter } from "../../../Router";

export const ApplicationLayout = () => {
  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <Suspense fallback={``}>
          <MainLayout
            header={<Navbar />}
            sidebar={<Sidebar />}
            content={<AppRouter />}
            toolbar={<ScrollToolbar />}
          />
        </Suspense>
      }
      off={
        <div className={classNames(cls.applicationLayout, {}, [])}>
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
