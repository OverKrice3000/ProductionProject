import { useTranslation } from "react-i18next";

import type { ReactNode } from "react";

interface AppErrorWithTranslationsProps {
  children: ReactNode;
}

export const AppErrorWithTranslations = ({
  children,
}: AppErrorWithTranslationsProps) => {
  useTranslation(`error`);

  return <>{children}</>;
};
