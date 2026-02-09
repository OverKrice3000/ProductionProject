import { memo } from "react";
import type { AppComment } from "../..";
import { classNames } from "@/shared/utils/classNames";
import cls from "./CommentCard.module.scss";
import { AppAvatar } from "@/shared/ui/appAvatar/AppAvatar";
import { AppText } from "@/shared/ui/appText/AppText";
import { AppSkeleton } from "@/shared/ui/appSkeleton/AppSkeleton";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { AppVStack } from "@/shared/ui/appStack";
import { useTranslation } from "react-i18next";
import { RoutePath } from "@/shared/constants/router";

interface CommentCardProps {
  className?: string;
  comment?: AppComment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
          <AppVStack gap={`8`} max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
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
        <AppVStack max gap={`8`} className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                <AppAvatar alt={t(`UserAvatar`)} size={30} src={comment.user.avatar} />
                <AppText title={comment.user.username} />
            </AppLink>
            <AppText text={comment.text} />
        </AppVStack>
  );
});

CommentCard.displayName = `CommentCard`;
