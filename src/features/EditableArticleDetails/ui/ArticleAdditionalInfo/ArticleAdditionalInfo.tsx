import { useTranslation } from "react-i18next";
import { memo } from "react";

import type { User } from "@/entities/User";
import { classNames } from "@/shared/utils/classNames";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { AppAvatar } from "@/shared/ui/redesigned/AppAvatar";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

interface ArticleAdditionalInfoProps {
  className?: string;
  articleId: string;
  author: User;
  createdAt: string;
  views: number;
}

export const ArticleAdditionalInfo = memo(
  ({
    className,
    articleId,
    author,
    createdAt,
    views,
  }: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation(`articleDetails`);
    return (
      <AppVStack
        max
        gap={`32`}
        justifyContent={`between`}
        className={classNames(``, {}, [className])}
      >
        <AppHStack gap={`8`}>
          <AppAvatar src={author.avatar} size={32} />
          <AppText text={author.username} bold />
          <AppText text={createdAt} />
        </AppHStack>
        <AppLink to={GetRoutePath[AppRoutes.ARTICLE_EDIT](articleId)}>
          <AppButton>{t(`Edit`)}</AppButton>
        </AppLink>
        <AppText text={t(`Views`, { count: views })} />
      </AppVStack>
    );
  },
);

ArticleAdditionalInfo.displayName = `ArticleDetailsPageHeader`;
