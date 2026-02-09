import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppVStack } from "@/shared/ui/AppStack";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import { AppSkeleton } from "@/shared/ui/AppSkeleton";

import { NotificationItem } from "../NotificationItem/NotificationItem";

import type { AppNotification } from "../../model/types/notification";

interface NotificationListProps extends Omit<AppFlexProps, `children`> {
  className?: string;
  notifications?: AppNotification[];
  isLoading?: boolean;
}

export const NotificationList = memo(({ className, notifications, isLoading, ...other }: NotificationListProps) => {
  if (isLoading) {
    return (
      <AppVStack {...other} gap={`16`} max className={classNames(``, {}, [className])}>
        <AppSkeleton width={`100%`} height={80} borderRadius={`8px`} />
        <AppSkeleton width={`100%`} height={80} borderRadius={`8px`} />
        <AppSkeleton width={`100%`} height={80} borderRadius={`8px`} />
      </AppVStack>
    );
  }

  return (
      <AppVStack {...other} gap={`16`} max className={classNames(``, {}, [className])}>
          {notifications?.map((notification) => <NotificationItem notification={notification} key={notification.id} />)}
        </AppVStack>
  );
});

NotificationList.displayName = `NotificationList`;
