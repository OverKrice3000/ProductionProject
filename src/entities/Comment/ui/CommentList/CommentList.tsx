import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/utils/classNames";
import { AppText } from "@/shared/ui/AppText";
import { AppVStack } from "@/shared/ui/AppStack";

import { CommentCard } from "../CommentCard/CommentCard";

import type { AppComment } from "../..";

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments: AppComment[];
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
        <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
          <CommentCard isLoading={isLoading} key={1} />
          <CommentCard isLoading={isLoading} key={2} />
          <CommentCard isLoading={isLoading} key={3} />
        </AppVStack>
    );
  }

  return (
        <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
            {comments.length
              ? comments.map((comment) => <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />)
              : <AppText text={t(`CommentsAbsent`)} /> }
        </AppVStack>
  );
});

CommentList.displayName = `CommentList`;
