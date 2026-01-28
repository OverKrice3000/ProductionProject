import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { AppText, TextAlign } from "shared/ui/appText/AppText";
import { useTranslation } from "react-i18next";

interface ArticleDetailsContentErrorProps {
  className?: string;
  error?: string;
}

export const ArticleDetailsContentError = memo(({ className, error }: ArticleDetailsContentErrorProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(``, {}, [className])}>
        <AppText title={t(error ?? `ArticleLoadingError`)} align={TextAlign.CENTER} />
    </div>
  );
});

ArticleDetailsContentError.displayName = `ArticleDetailsContentError`;
