import { memo, useCallback } from "react";

import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { useEnvironmentEffect } from "@/shared/utils/hooks/useEnvironmentEffect";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { useReducer } from "@/shared/utils/hooks/useReducer";

import { EditableProfileHeader } from "../EditableProfileHeader/EditableProfileHeader";
import { EditableProfileCard } from "../EditableProfileCard/EditableProfileCard";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileValidationErrors } from "../EditableProfileValidationErrors/EditableProfileValidationErrors";

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
      <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
        <EditableProfileHeader />
        <EditableProfileValidationErrors />
        <EditableProfileCard />
      </AppVStack>
    );
  },
);

EditableProfile.displayName = `EditableProfile`;
