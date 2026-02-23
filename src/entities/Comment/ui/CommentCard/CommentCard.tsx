import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppAvatar as AppAvatarDeprecated } from "@/shared/ui/deprecated/AppAvatar";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppAvatar } from "@/shared/ui/redesigned/AppAvatar";
import { AppCard } from "@/shared/ui/redesigned/AppCard";

import cls from "./CommentCard.module.scss";

import type { AppComment } from "../../model/types/comment";

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
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={
            <AppVStack
              {...other}
              gap={`8`}
              maxW
              className={classNames(cls.CommentCard, {}, [
                className,
                cls.loading,
              ])}
            >
              <div className={cls.header}>
                <AppSkeleton width={30} height={30} borderRadius={`50%`} />
                <AppSkeleton height={16} width={100} />
              </div>
              <AppSkeleton width={`100%`} height={50} />
            </AppVStack>
          }
          off={
            <AppVStack
              {...other}
              gap={`8`}
              maxW
              className={classNames(cls.CommentCard, {}, [
                className,
                cls.loading,
              ])}
            >
              <div className={cls.header}>
                <AppSkeletonDeprecated
                  width={30}
                  height={30}
                  borderRadius={`50%`}
                />
                <AppSkeletonDeprecated height={16} width={100} />
              </div>
              <AppSkeletonDeprecated width={`100%`} height={50} />
            </AppVStack>
          }
        />
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            border={`borderRound`}
            {...other}
            p={`p24`}
            max
            gap={`8`}
            className={classNames(``, {}, [className])}
          >
            <AppLink to={GetRoutePath[AppRoutes.PROFILE](comment.user.id)}>
              <AppHStack gap={`8`} align={`center`}>
                <AppAvatar
                  alt={t(`UserAvatar`)}
                  size={30}
                  src={comment.user.avatar}
                />
                <AppText bold text={comment.user.username} />
              </AppHStack>
            </AppLink>
            <AppText text={comment.text} />
          </AppCard>
        }
        off={
          <AppVStack
            {...other}
            maxW
            gap={`8`}
            className={classNames(cls.CommentCard, {}, [className])}
          >
            <AppLinkDeprecated
              to={GetRoutePath[AppRoutes.PROFILE](comment.user.id)}
              className={cls.header}
            >
              <AppAvatarDeprecated
                alt={t(`UserAvatar`)}
                size={30}
                src={comment.user.avatar}
              />
              <AppTextDeprecated title={comment.user.username} />
            </AppLinkDeprecated>
            <AppTextDeprecated text={comment.text} />
          </AppVStack>
        }
      />
    );
  },
);

CommentCard.displayName = `CommentCard`;
