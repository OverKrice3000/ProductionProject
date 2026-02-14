import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppText } from "@/shared/ui/deprecated/AppText";
import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";

import { CommentCard } from "../CommentCard/CommentCard";

import type { AppComment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments: AppComment[];
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <AppVStack
          gap={`16`}
          as={`ul`}
          max
          className={classNames(``, {}, [className])}
        >
          <CommentCard as={`li`} isLoading={isLoading} key={1} />
          <CommentCard as={`li`} isLoading={isLoading} key={2} />
          <CommentCard as={`li`} isLoading={isLoading} key={3} />
        </AppVStack>
      );
    }

    return (
      <AppVStack
        as={`ul`}
        gap={`16`}
        max
        className={classNames(``, {}, [className])}
      >
        {comments.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              as={`li`}
              isLoading={isLoading}
              comment={comment}
            />
          ))
        ) : (
          <AppText text={t(`CommentsAbsent`)} />
        )}
      </AppVStack>
    );
  },
);

CommentList.displayName = `CommentList`;
