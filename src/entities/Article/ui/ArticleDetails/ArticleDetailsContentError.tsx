import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import { AppText, TextAlign } from "@/shared/ui/AppText/AppText";
import { useTranslation } from "react-i18next";
import { AppHStack } from "@/shared/ui/AppStack";

interface ArticleDetailsContentErrorProps {
  className?: string;
  error?: string;
}

export const ArticleDetailsContentError = memo(({ className, error }: ArticleDetailsContentErrorProps) => {
  const { t } = useTranslation();

  return (
    <AppHStack justifyContent={`center`} max className={classNames(``, {}, [className])}>
        <AppText title={t(error ?? `ArticleLoadingError`)} align={TextAlign.CENTER} />
    </AppHStack>
  );
});

ArticleDetailsContentError.displayName = `ArticleDetailsContentError`;
