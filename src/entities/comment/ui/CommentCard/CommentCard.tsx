import { memo } from "react";
import type { AppComment } from "entities/comment";
import { classNames } from "shared/utils/classNames";
import cls from "entities/comment/ui/CommentCard/CommentCard.module.scss";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";
import { AppText } from "shared/ui/appText/AppText";
import { AppSkeleton } from "shared/ui/appSkeleton/AppSkeleton";
import { AppLink } from "shared/ui/appLink/AppLink";

interface CommentCardProps {
  className?: string;
  comment?: AppComment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
          <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
              <div className={cls.header}>
                  <AppSkeleton width={30} height={30} borderRadius={`50%`} />
                  <AppSkeleton height={16} width={100} />
              </div>
              <AppSkeleton width={`100%`} height={50} />
          </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`/profile/${comment.user.id}`} className={cls.header}>
                <AppAvatar size={30} src={comment.user.avatar} />
                <AppText title={comment.user.username} />
            </AppLink>
            <AppText text={comment.text} />
        </div>
  );
});

CommentCard.displayName = `CommentCard`;
