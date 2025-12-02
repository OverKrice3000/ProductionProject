import { ReactNode, Suspense } from "react";
import { render } from "@testing-library/react";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router";
import { I18nextProvider } from "react-i18next";

export interface ComponentRenderOptions {
  route?: string;
}

export const componentRender = (component: ReactNode, { route = `/` }: ComponentRenderOptions = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        <Suspense fallback={``}>
          {component}
        </Suspense>
      </I18nextProvider>
    </MemoryRouter>,
  );
};
