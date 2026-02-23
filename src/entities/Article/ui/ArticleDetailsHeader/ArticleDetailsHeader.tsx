import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";

import { AppButton, AppButtonTheme } from "@/shared/ui/deprecated/AppButton";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { AppHStack } from "@/shared/ui/AppStack";
import { getAuthData } from "@/entities/User";
import { classNames } from "@/shared/utils/classNames";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

import type { Article } from "../../model/types/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
  article?: Article;
}

export const ArticleDetailsHeader = memo(
  ({ className, article }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation(`articleDetails`);

    const user = useSelector(getAuthData);

    const isEditable = user && user?.id === article?.user.id;

    return (
      <AppHStack
        maxW
        justifyContent={`between`}
        className={classNames(``, {}, [className])}
      >
        <AppLink to={GetRoutePath[AppRoutes.ARTICLES]()}>
          <AppButton theme={AppButtonTheme.OUTLINE}>
            {t(`BackToArticlesList`)}
          </AppButton>
        </AppLink>
        {isEditable && article?.id && (
          <AppLink to={GetRoutePath[AppRoutes.ARTICLE_EDIT](article.id)}>
            <AppButton theme={AppButtonTheme.OUTLINE}>{t(`Edit`)}</AppButton>
          </AppLink>
        )}
      </AppHStack>
    );
  },
);

ArticleDetailsHeader.displayName = `ArticleDetailsHeader`;
