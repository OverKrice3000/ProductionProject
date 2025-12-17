import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "../config/routeConfig/routerConfig";
import { PageLoader } from "pages/PageLoader";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/user";

export const AppRouter = memo(() => {
  const isAuth = useSelector(getAuthData);

  const routes = useMemo(() => {
    return Object.values(RouteConfig).filter((route) => !route.authOnly || isAuth);
  }, [isAuth]);

  return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {
            routes.map((config) => {
              return (
                  <Route key={config.path} path={config.path} element={config.element}></Route>
              );
            })
          }
        </Routes>
      </Suspense>
  );
});

AppRouter.displayName = `AppRouter`;
