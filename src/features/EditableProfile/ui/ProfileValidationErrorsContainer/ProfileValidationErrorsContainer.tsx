import { memo } from "react";
import { useSelector } from "react-redux";

import { ProfileValidationErrors } from "@/entities/Profile";
import { classNames } from "@/shared/utils/classNames";

import { getProfileValidationErrors } from "../../model/selectors/getProfileValidationErrors/getProfileValidationErrors";

interface EditableProfileCardProps {
  className?: string;
}

export const ProfileValidationErrorsContainer = memo(
  ({ className }: EditableProfileCardProps) => {
    const validationErrors = useSelector(getProfileValidationErrors);

    return (
      <ProfileValidationErrors
        className={classNames(``, {}, [className])}
        validationErrors={validationErrors}
      />
    );
  },
);

ProfileValidationErrorsContainer.displayName = `ProfileValidationErrorsContainer`;
