import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";

import { AppButton, AppButtonTheme } from "@/shared/ui/deprecated/AppButton";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { AppHStack } from "@/shared/ui/AppStack";
import { getAuthData } from "@/entities/User";
import { classNames } from "@/shared/utils/classNames";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

import { getArticleData } from "../../../../features/EditableArticleDetails/model/selectors/articleSelectors";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = memo(
  ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation(`articleDetails`);

    const user = useSelector(getAuthData);
    const article = useSelector(getArticleData);

    const isEditable = user && user?.id === article?.user.id;

    return (
      <AppHStack
        max
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
