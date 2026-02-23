import { memo, useCallback } from "react";

import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { useEnvironmentEffect } from "@/shared/utils/hooks/useEnvironmentEffect";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { useReducer } from "@/shared/utils/hooks/useReducer";

import { ProfileValidationErrorsContainer } from "../ProfileValidationErrorsContainer/ProfileValidationErrorsContainer";
import { ProfileHeaderContainer } from "../ProfileHeaderContainer/ProfileHeaderContainer";
import { ProfileCardContainer } from "../ProfileCardContainer/ProfileCardContainer";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileReducer } from "../../model/slice/profileSlice";

interface EditableProfileProps {
  className?: string;
  profileId?: string;
}

export const EditableProfile = memo(
  ({ className, profileId }: EditableProfileProps) => {
    const dispatch = useAppDispatch();

    useReducer(`profile`, profileReducer);

    useEnvironmentEffect(
      useCallback(() => {
        if (profileId) {
          dispatch(fetchProfileData(profileId));
        }
      }, [dispatch, profileId]),
    );

    return (
      <AppVStack gap={`16`} maxW className={classNames(``, {}, [className])}>
        <ProfileHeaderContainer />
        <ProfileValidationErrorsContainer />
        <ProfileCardContainer />
      </AppVStack>
    );
  },
);

EditableProfile.displayName = `EditableProfile`;
