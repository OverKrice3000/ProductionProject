import React, { memo, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "../config/routeConfig/routerConfig";
import { PageLoader } from "pages/PageLoader";
import { RequireAuth } from "app/Router/ui/RequireAuth";

export const AppRouter = memo(() => {
  return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {
              Object.values(RouteConfig).map((config) => {
                const element = config.authOnly ? <RequireAuth requiredRoles={config.roles}>{config.element}</RequireAuth> : config.element;

                return <Route key={config.path} path={config.path} element={element}></Route>;
              })
          }
        </Routes>
      </Suspense>
  );
});

AppRouter.displayName = `AppRouter`;
