import { screen } from "@testing-library/react";

import { componentRender } from "@/shared/config/tests/render/componentRender";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import { testUser, testUserAdmin } from "@/entities/User";

import { AppRouter } from './AppRouter';

describe(`App Router`, () => {
  test(`Page renders`, async () => {
    componentRender(<AppRouter />, { route: GetRoutePath[AppRoutes.ABOUT]() });

    const page = await screen.findByRole(`main`);

    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/about page/i);
  });

  test(`Page not found`, async () => {
    componentRender(<AppRouter />, { route: `/unrealPage` });

    const page = await screen.findByRole(`main`);
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/not found/i);
  });

  test(`Not authorized redirect`, async () => {
    componentRender(<AppRouter />, { route: GetRoutePath[AppRoutes.PROFILE](`1`) });

    const page = await screen.findByRole(`main`);
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/main page/i);
  });

  test(`Authorized profile page`, async () => {
    componentRender(<AppRouter />, {
      route: GetRoutePath[AppRoutes.PROFILE](`1`),
      initialState: {
        user: {
          authData: testUser,
        },
      },
    });

    const page = await screen.findByRole(`main`);
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/profile/i);
  });

  test(`Redirect to forbidden if user doesn't have role`, async () => {
    componentRender(<AppRouter />, {
      route: GetRoutePath[AppRoutes.ADMIN_PANEL](),
      initialState: {
        user: {
          authData: testUser,
        },
      },
    });

    const page = await screen.findByRole(`main`);
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/forbidden/i);
  });

  test(`Access admin panel with required role`, async () => {
    componentRender(<AppRouter />, {
      route: GetRoutePath[AppRoutes.ADMIN_PANEL](),
      initialState: {
        user: {
          authData: testUserAdmin,
        },
      },
    });

    const page = await screen.findByRole(`main`);
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/admin/i);
  });
});
