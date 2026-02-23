import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import { ProfileHeader } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { classNames } from "@/shared/utils/classNames";

import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";

interface EditableProfileCardProps {
  className?: string;
}

export const ProfileHeaderContainer = memo(
  ({ className }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();

    const profile = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
      <ProfileHeader
        className={classNames(``, {}, [className])}
        profile={profile}
        readonly={readonly}
        onEdit={onEdit}
        onSave={onSave}
        onCancelEdit={onCancelEdit}
      />
    );
  },
);

ProfileHeaderContainer.displayName = `ProfileHeaderContainer`;
