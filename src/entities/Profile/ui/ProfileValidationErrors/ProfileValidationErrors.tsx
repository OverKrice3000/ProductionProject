import { useTranslation } from "react-i18next";
import { memo } from "react";

import {
  AppText as AppTextDeprecated,
  TextTheme,
} from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppErrorWithTranslations } from "@/shared/ui/AppErrorWithTranslations";

import type { ValidateProfileError } from "../../model/types/profile";

interface EditableProfileValidationErrorsProps {
  className?: string;
  validationErrors?: ValidateProfileError[];
}

export const ProfileValidationErrors = memo(
  ({ className, validationErrors }: EditableProfileValidationErrorsProps) => {
    const { t } = useTranslation();

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <div className={classNames(``, {}, [className])}>
            {validationErrors?.length && (
              <AppErrorWithTranslations>
                {validationErrors.map((error) => (
                  <AppText
                    role={`alert`}
                    variant={`error`}
                    text={t(error)}
                    key={error}
                  />
                ))}
              </AppErrorWithTranslations>
            )}
          </div>
        }
        off={
          <div className={classNames(``, {}, [className])}>
            {validationErrors?.length &&
              validationErrors.map((error) => (
                <AppTextDeprecated
                  role={`alert`}
                  theme={TextTheme.ERROR}
                  text={t(error)}
                  key={error}
                />
              ))}
          </div>
        }
      />
    );
  },
);

ProfileValidationErrors.displayName = `EditableProfileValidationErrors`;
