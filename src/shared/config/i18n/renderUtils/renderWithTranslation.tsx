import { I18nextProvider } from "react-i18next";
import { ReactNode, Suspense } from "react";
import { render } from "@testing-library/react";
import i18nForTests from "shared/config/i18n/i18nForTests";

export const renderWithTranslation = (component: ReactNode) => {
  return render(<I18nextProvider i18n={i18nForTests}>
      <Suspense fallback={``}>
          {component}
      </Suspense>
  </I18nextProvider>);
};
