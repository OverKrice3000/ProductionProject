import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/utils/classNames";
import { AppAvatar } from "@/shared/ui/AppAvatar";
import { AppText } from "@/shared/ui/AppText";
import { AppSkeleton } from "@/shared/ui/AppSkeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { AppVStack } from "@/shared/ui/AppStack";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

import cls from "./CommentCard.module.scss";

import type { AppComment } from "../..";

interface CommentCardProps {
  className?: string;
  comment?: AppComment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <AppVStack
          gap={`8`}
          max
          className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        >
          <div className={cls.header}>
            <AppSkeleton width={30} height={30} borderRadius={`50%`} />
            <AppSkeleton height={16} width={100} />
          </div>
          <AppSkeleton width={`100%`} height={50} />
        </AppVStack>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <AppVStack
        max
        gap={`8`}
        className={classNames(cls.CommentCard, {}, [className])}
      >
        <AppLink
          to={GetRoutePath[AppRoutes.PROFILE](comment.user.id)}
          className={cls.header}
        >
          <AppAvatar
            alt={t(`UserAvatar`)}
            size={30}
            src={comment.user.avatar}
          />
          <AppText title={comment.user.username} />
        </AppLink>
        <AppText text={comment.text} />
      </AppVStack>
    );
  },
);

CommentCard.displayName = `CommentCard`;
