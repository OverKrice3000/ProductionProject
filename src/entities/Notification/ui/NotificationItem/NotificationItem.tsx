import cls from "./NotificationItem.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import type { AppNotification } from "../..";
import { AppCard, CardTheme } from "@/shared/ui/AppCard";
import { AppText } from "@/shared/ui/AppText";
import { AppLink } from "@/shared/ui/AppLink";

interface NotificationItemProps {
  className?: string;
  notification: AppNotification;
}

export const NotificationItem = memo(({ className, notification }: NotificationItemProps) => {
  const content = (
      <AppCard role="article" as={`article`} theme={CardTheme.OUTLINE} className={classNames(cls.NotificationItem, {}, [className])}>
        <AppText title={notification.title} text={notification.description} />
      </AppCard>
  );

  if (notification.href) {
    return <AppLink className={cls.link} to={notification.href}>{content}</AppLink>;
  }

  return content;
});

NotificationItem.displayName = `NotificationItem`;
