import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import { AppButton, AppButtonTheme } from "@/shared/ui/appButton/AppButton";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { AppHStack } from "@/shared/ui/appStack";
import { getArticleData } from "../../model/selectors/articleSelectors";
import { RoutePath } from "@/shared/constants/router";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const EditableArticleDetailsHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation(`article`);

  const user = useSelector(getAuthData);
  const article = useSelector(getArticleData);

  const isEditable = user && user?.id === article?.user.id;

  return (
        <AppHStack max justifyContent={`between`} className={classNames(``, {}, [className])}>
          <AppLink to={`${RoutePath.articles}`}>
            <AppButton theme={AppButtonTheme.OUTLINE}>
              {t(`BackToArticlesList`)}
            </AppButton>
          </AppLink>
          {
            isEditable && article?.id &&
              <AppLink to={`${RoutePath.article_details}${article.id}/edit`}>
                  <AppButton theme={AppButtonTheme.OUTLINE}>
                      {t(`Edit`)}
                  </AppButton>
              </AppLink>
          }
        </AppHStack>
  );
});

EditableArticleDetailsHeader.displayName = `ArticleDetailsPageHeader`;
