import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { AppRoutes, RouteConfig } from "../config/routeConfig/routerConfig";
import { PageLoader } from "pages/PageLoader";

export const AppRouter = () => {
  return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {
            Object.values(AppRoutes).map((route) => {
              const config = RouteConfig[route as AppRoutes];
              return (
                  <Route key={config.path} path={config.path} element={config.element}></Route>
              );
            })
          }
        </Routes>
      </Suspense>
  );
};
