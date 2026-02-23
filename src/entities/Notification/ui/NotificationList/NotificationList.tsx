import { memo } from "react";

import { AppVStack } from "@/shared/ui/AppStack";
import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { classNames } from "@/shared/utils/classNames";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";

import { NotificationItem } from "../NotificationItem/NotificationItem";

import type { AppNotification } from "../../model/types/notification";

interface NotificationListProps extends AppFlexProps {
  className?: string;
  notifications?: AppNotification[];
  isLoading?: boolean;
}

export const NotificationList = memo(
  ({
    className,
    notifications,
    isLoading,
    ...other
  }: NotificationListProps) => {
    if (isLoading) {
      return (
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={
            <AppVStack
              {...other}
              gap={`16`}
              max
              className={classNames(``, {}, [className])}
            >
              <AppSkeleton width={`100%`} height={80} borderRadius={`8px`} />
              <AppSkeleton width={`100%`} height={80} borderRadius={`8px`} />
              <AppSkeleton width={`100%`} height={80} borderRadius={`8px`} />
            </AppVStack>
          }
          off={
            <AppVStack
              {...other}
              gap={`16`}
              max
              className={classNames(``, {}, [className])}
            >
              <AppSkeletonDeprecated
                width={`100%`}
                height={80}
                borderRadius={`8px`}
              />
              <AppSkeletonDeprecated
                width={`100%`}
                height={80}
                borderRadius={`8px`}
              />
              <AppSkeletonDeprecated
                width={`100%`}
                height={80}
                borderRadius={`8px`}
              />
            </AppVStack>
          }
        />
      );
    }

    return (
      <AppVStack
        {...other}
        gap={`16`}
        max
        className={classNames(``, {}, [className])}
      >
        {notifications?.map((notification) => (
          <NotificationItem notification={notification} key={notification.id} />
        ))}
      </AppVStack>
    );
  },
);

NotificationList.displayName = `NotificationList`;
