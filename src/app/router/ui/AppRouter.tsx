import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { AppRoutes, RouteConfig } from "app/router/config/routeConfig/routerConfig";
import { PageLoader } from "pages/pageLoader/ui/PageLoader";

export const AppRouter = () => {
  return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {
            Object.values(AppRoutes).map((route) => {
              const config = RouteConfig[route as AppRoutes];
              return (
                  <Route key={config.path} path={config.path} element={<div className="pageWrapper">{config.element}</div>}></Route>
              );
            })
          }
        </Routes>
      </Suspense>
  );
};
