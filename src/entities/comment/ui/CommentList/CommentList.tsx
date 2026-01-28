import cls from "./CommentList.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { AppText } from "shared/ui/appText/AppText";
import { CommentCard } from "entities/comment/ui/CommentCard/CommentCard";
import type { AppComment } from "entities/comment";
import { useTranslation } from "react-i18next";

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments: AppComment[];
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments.length
              ? comments.map((comment) => <CommentCard isLoading={true} key={comment.id} comment={comment} />)
              : <AppText text={t(`CommentsAbsent`)} /> }
        </div>
  );
});

CommentList.displayName = `CommentList`;
