import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  AppText as AppTextDeprecated,
  TextAlign,
} from "@/shared/ui/deprecated/AppText";
import { AppHStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface ArticleDetailsContentErrorProps {
  className?: string;
  error?: string;
}

export const ArticleDetailsContentError = memo(
  ({ className, error }: ArticleDetailsContentErrorProps) => {
    const { t } = useTranslation(`error`);

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppHStack
            justifyContent={`center`}
            max
            className={classNames(``, {}, [className])}
          >
            <AppText
              title={t(error ?? `ArticleLoadingError`)}
              align={`center`}
            />
          </AppHStack>
        }
        off={
          <AppHStack
            justifyContent={`center`}
            max
            className={classNames(``, {}, [className])}
          >
            <AppTextDeprecated
              title={t(error ?? `ArticleLoadingError`)}
              align={TextAlign.CENTER}
            />
          </AppHStack>
        }
      />
    );
  },
);

ArticleDetailsContentError.displayName = `ArticleDetailsContentError`;
