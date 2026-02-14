import { memo } from "react";

import { AppCard, CardTheme } from "@/shared/ui/deprecated/AppCard";
import { AppText } from "@/shared/ui/deprecated/AppText";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { classNames } from "@/shared/utils/classNames";

import cls from "./NotificationItem.module.scss";

import type { AppNotification } from "../..";

interface NotificationItemProps {
  className?: string;
  notification: AppNotification;
}

export const NotificationItem = memo(
  ({ className, notification }: NotificationItemProps) => {
    const content = (
      <AppCard
        role="article"
        as={`article`}
        theme={CardTheme.OUTLINE}
        className={classNames(cls.NotificationItem, {}, [className])}
      >
        <AppText title={notification.title} text={notification.description} />
      </AppCard>
    );

    if (notification.href) {
      return (
        <AppLink className={cls.link} to={notification.href}>
          {content}
        </AppLink>
      );
    }

    return content;
  },
);

NotificationItem.displayName = `NotificationItem`;
