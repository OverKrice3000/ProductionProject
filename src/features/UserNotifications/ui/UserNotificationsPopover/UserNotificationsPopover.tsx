import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { classNames } from "@/shared/utils/classNames";
import { AppIcon, AppIconColor } from "@/shared/ui/AppIcon";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { AppPopover } from "@/shared/ui/Popups";
import { NotificationList } from "@/entities/Notification";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import type { DropdownDirection } from "@/shared/types/ui";
import { AppDrawer } from "@/shared/ui/AppDrawer";

import { notificationsPollingInterval } from "../../api/constants";
import { useNotifications } from "../../api/notificationsApi";
import cls from "./UserNotificationsPopover.module.scss";

interface UserNotificationsPopoverProps extends Omit<
  AppFlexProps,
  `children` | `ref` | `direction`
> {
  className?: string;
  direction?: DropdownDirection;
}

export const UserNotificationsPopover = memo(
  ({
    className,
    direction = `bottomRight`,
    ...other
  }: UserNotificationsPopoverProps) => {
    const { data, isLoading } = useNotifications(undefined, {
      pollingInterval: notificationsPollingInterval,
    });

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = useCallback(() => {
      setDrawerOpen(!isDrawerOpen);
    }, [isDrawerOpen]);
    const closeDrawer = useCallback(() => {
      setDrawerOpen(false);
    }, []);

    const trigger = (
      <AppIcon
        color={AppIconColor.INVERTED_PRIMARY}
        aria-hidden={true}
        Svg={NotificationIcon}
        onClick={toggleDrawer}
      />
    );

    return (
      <>
        <BrowserView>
          <AppPopover direction={direction} trigger={trigger}>
            <NotificationList
              {...other}
              role="dialog"
              aria-live="polite"
              aria-label={`Notification list`}
              notifications={data}
              isLoading={isLoading}
              className={classNames(cls.UserNotificationsPopover, {}, [
                className,
                cls.desktop,
              ])}
            />
          </AppPopover>
        </BrowserView>
        <MobileView>
          {trigger}
          <AppDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
            <NotificationList
              {...other}
              role="dialog"
              aria-live="polite"
              aria-label={`Notification list`}
              notifications={data}
              isLoading={isLoading}
              className={classNames(cls.UserNotificationsPopover, {}, [
                className,
                cls.mobile,
              ])}
            />
          </AppDrawer>
        </MobileView>
      </>
    );
  },
);

UserNotificationsPopover.displayName = `UserNotificationsPopover`;
