import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { AppDrawer } from "@/shared/ui/AppDrawer";
import {
  AppIcon as AppIconDeprecated,
  AppIconColor,
} from "@/shared/ui/deprecated/AppIcon";
import { AppPopover as AppPopoverDeprecated } from "@/shared/ui/deprecated/Popups";
import type { DropdownDirection } from "@/shared/types/ui";
import { NotificationList } from "@/entities/Notification";
import NotificationIconDeprecated from "@/shared/assets/icons/notification.svg";
import NotificationIcon from "@/shared/assets/icons/redesigned/notification.svg";
import { classNames } from "@/shared/utils/classNames";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { AppPopover } from "@/shared/ui/redesigned/Popups";

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
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppIcon
            aria-hidden={true}
            Svg={NotificationIcon}
            width={32}
            height={32}
            clickable
            onClick={toggleDrawer}
          />
        }
        off={
          <AppIconDeprecated
            color={AppIconColor.INVERTED_PRIMARY}
            aria-hidden={true}
            Svg={NotificationIconDeprecated}
            onClick={toggleDrawer}
          />
        }
      />
    );

    return (
      <>
        <BrowserView>
          <ToggleFeatures
            name={`isAppRedesigned`}
            on={
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
            }
            off={
              <AppPopoverDeprecated direction={direction} trigger={trigger}>
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
              </AppPopoverDeprecated>
            }
          />
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
