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

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
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
        <ul
          style={{
            display: `flex`,
            flexDirection: `column`,
            width: `100%`,
            gap: 16,
          }}
        >
          {comments.length ? (
            comments.map((comment) => (
              <li key={comment.id} style={{ display: `flex`, width: `100%` }}>
                <CommentCard
                  as={`article`}
                  isLoading={isLoading}
                  comment={comment}
                />
              </li>
            ))
          ) : (
            <AppText text={t(`CommentsAbsent`)} />
          )}
        </ul>
      </AppVStack>
    );
  },
);

CommentList.displayName = `CommentList`;
