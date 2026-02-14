import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { AppIcon, AppIconColor } from "@/shared/ui/deprecated/AppIcon";
import { AppPopover } from "@/shared/ui/deprecated/Popups";
import { AppDrawer } from "@/shared/ui/deprecated/AppDrawer";
import type { DropdownDirection } from "@/shared/types/ui";
import { NotificationList } from "@/entities/Notification";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { classNames } from "@/shared/utils/classNames";
import type { AppFlexProps } from "@/shared/ui/AppStack";

import { notificationsPollingInterval } from "../../api/constants";
import { useNotifications } from "../../api/notificationsApi";
import cls from "./UserNotificationsPopover.module.scss";

interface UserNotificationsPopoverProps extends Omit<
  AppFlexProps,
  `direction`
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
