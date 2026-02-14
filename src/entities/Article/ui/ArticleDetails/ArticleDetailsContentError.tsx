import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppText, TextAlign } from "@/shared/ui/deprecated/AppText";
import { AppHStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";

interface ArticleDetailsContentErrorProps {
  className?: string;
  error?: string;
}

export const ArticleDetailsContentError = memo(
  ({ className, error }: ArticleDetailsContentErrorProps) => {
    const { t } = useTranslation();

    return (
      <AppHStack
        justifyContent={`center`}
        max
        className={classNames(``, {}, [className])}
      >
        <AppText
          title={t(error ?? `ArticleLoadingError`)}
          align={TextAlign.CENTER}
        />
      </AppHStack>
    );
  },
);

ArticleDetailsContentError.displayName = `ArticleDetailsContentError`;
