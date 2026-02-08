import cls from "./UserNotificationsPopover.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { AppIcon, AppIconColor } from "shared/ui/appIcon/AppIcon";
import NotificationIcon from "shared/assets/icons/notification.svg";
import { AppPopover } from "shared/ui/popups";
import { useNotifications } from "../../api/notificationsApi";
import { notificationsPollingInterval } from "../../api/constants";
import { NotificationList } from "entities/Notification";
import type { AppFlexProps } from "shared/ui/appStack/appFlex/AppFlex";
import type { DropdownDirection } from "shared/types/ui";

interface UserNotificationsPopoverProps extends Omit<AppFlexProps, `children` | `ref` | `direction`> {
  className?: string;
  direction?: DropdownDirection;
}

export const UserNotificationsPopover = memo(({ className, direction = `bottomRight`, ...other }: UserNotificationsPopoverProps) => {
  const { data, isLoading } = useNotifications(undefined, {
    pollingInterval: notificationsPollingInterval,
  });

  return (
      <AppPopover
          direction={direction}
          trigger={<AppIcon color={AppIconColor.INVERTED_PRIMARY} aria-hidden={true} Svg={NotificationIcon} />}>
          <NotificationList
              {...other}
              role="dialog"
              aria-live="polite"
              aria-label={`Notification list`}
              notifications={data}
              isLoading={isLoading}
              className={classNames(cls.UserNotificationsPopover, {}, [className])}
          />
      </AppPopover>
  );
});

UserNotificationsPopover.displayName = `UserNotificationsPopover`;
