import { memo } from "react";

import {
  AppCard as AppCardDeprecated,
  CardTheme,
} from "@/shared/ui/deprecated/AppCard";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppLink } from "@/shared/ui/redesigned/AppLink";

import cls from "./NotificationItem.module.scss";

import type { AppNotification } from "../..";

interface NotificationItemProps {
  className?: string;
  notification: AppNotification;
}

export const NotificationItem = memo(
  ({ className, notification }: NotificationItemProps) => {
    const content = (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            role="article"
            as={`article`}
            className={classNames(cls.NotificationItem, {}, [className])}
          >
            <AppText
              title={notification.title}
              text={notification.description}
            />
          </AppCard>
        }
        off={
          <AppCardDeprecated
            role="article"
            as={`article`}
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
          >
            <AppTextDeprecated
              title={notification.title}
              text={notification.description}
            />
          </AppCardDeprecated>
        }
      />
    );

    if (notification.href) {
      return (
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={
            <AppLink className={cls.link} to={notification.href}>
              {content}
            </AppLink>
          }
          off={
            <AppLinkDeprecated className={cls.link} to={notification.href}>
              {content}
            </AppLinkDeprecated>
          }
        />
      );
    }

    return content;
  },
);

NotificationItem.displayName = `NotificationItem`;
