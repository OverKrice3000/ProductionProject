import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";

import { AppText, TextTheme } from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";

import { getProfileValidationErrors } from "../../model/selectors/getProfileValidationErrors/getProfileValidationErrors";

interface EditableProfileValidationErrorsProps {
  className?: string;
}

export const EditableProfileValidationErrors = memo(
  ({ className }: EditableProfileValidationErrorsProps) => {
    const { t } = useTranslation();
    const validationErrors = useSelector(getProfileValidationErrors);

    return (
      <div className={classNames(``, {}, [className])}>
        {validationErrors?.length &&
          validationErrors.map((error) => (
            <AppText
              role={`alert`}
              theme={TextTheme.ERROR}
              text={t(error)}
              key={error}
            />
          ))}
      </div>
    );
  },
);

EditableProfileValidationErrors.displayName = `EditableProfileValidationErrors`;
