import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppAvatar } from "@/shared/ui/deprecated/AppAvatar";
import { AppText } from "@/shared/ui/deprecated/AppText";
import { AppSkeleton } from "@/shared/ui/deprecated/AppSkeleton";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import type { AppFlexProps } from "@/shared/ui/AppStack";

import cls from "./CommentCard.module.scss";

import type { AppComment } from "../..";

interface CommentCardProps extends AppFlexProps {
  className?: string;
  comment?: AppComment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading, ...other }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <AppVStack
          {...other}
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
        {...other}
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
