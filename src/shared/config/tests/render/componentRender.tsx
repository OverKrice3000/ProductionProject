import type { ReactNode } from "react";
import { Suspense } from "react";
import { render } from "@testing-library/react";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import { StateProvider } from "app/providers/stateProvider";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import type { DeepPartial } from "@reduxjs/toolkit";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, { route = `/`, initialState }: ComponentRenderOptions = {}) => {
  return render(
    <StateProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          <Suspense fallback={``}>
            {component}
          </Suspense>
        </I18nextProvider>
      </MemoryRouter>
    </StateProvider>,
  );
};
