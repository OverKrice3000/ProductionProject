import { memo, useCallback, useMemo } from "react";
import { AppDropdown } from "@/shared/ui/Popups";
import { AppAvatar } from "@/shared/ui/AppAvatar";
import { useSelector } from "react-redux";
import { getAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import type { DropdownItem } from "@/shared/ui/Popups";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import type { DropdownDirection } from "@/shared/types/ui";
import { classNames } from "@/shared/utils/classNames";

interface AvatarDropdownProps {
  className?: string;
  direction?: DropdownDirection;
}

export const AvatarDropdown = memo(({ className, direction = `bottomRight` }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const authData = useSelector(getAuthData);

  const avatarDropdownItems = useMemo<DropdownItem[]>(() => [
    {
      content: t(`AdminPanel`),
      href: `/admin`,
      unavailable: !isAdminPanelAvailable,
    },
    {
      content: t(`UserProfile`),
      href: `/profile/${authData?.id ?? 1}`,
    },
    {
      content: t(`Logout`),
      onClick: onLogout,
    },
  ], [authData, isAdminPanelAvailable, onLogout, t]);

  return (
    <AppDropdown
        direction={direction}
        items={avatarDropdownItems}
        trigger={<AppAvatar className={classNames(``, {}, [className])}
                            aria-hidden={true}
                            alt={t(`UserAvatar`)}
                            size={30} src={authData?.avatar} />}
    />
  );
});

AvatarDropdown.displayName = `AvatarDropdown`;
