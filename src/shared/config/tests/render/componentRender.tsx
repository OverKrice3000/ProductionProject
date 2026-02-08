import type { ReactNode } from "react";
import { Suspense } from "react";
import { render } from "@testing-library/react";
import i18nForTests from "../../i18n/i18nForTests";
import { MemoryRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import { StateProvider } from "@/app/providers/stateProvider";
import type { StateSchema } from "@/app/providers/stateProvider/config/stateSchema";
import type { DeepPartial } from "@/shared/types/types";
import type { ReducersMapObject } from "@reduxjs/toolkit";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const componentRender = (component: ReactNode, { route = `/`, initialState, asyncReducers }: ComponentRenderOptions = {}) => {
  return render(
      <MemoryRouter initialEntries={[route]}>
        <StateProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <Suspense fallback={``}>
            {component}
          </Suspense>
        </I18nextProvider>
        </StateProvider>
      </MemoryRouter>,
  );
};
