import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { AppRoutes, RouteConfig } from "app/router/config/routeConfig/routerConfig";

export const AppRouter = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
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
