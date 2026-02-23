import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppAvatar as AppAvatarDeprecated } from "@/shared/ui/deprecated/AppAvatar";
import {
  AppText as AppTextDeprecated,
  TextSize,
} from "@/shared/ui/deprecated/AppText";
import { AppIcon as AppIconDeprecated } from "@/shared/ui/deprecated/AppIcon";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import DateIcon from "@/shared/assets/icons/date.svg";
import { classNames } from "@/shared/utils/classNames";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";

import { ArticleImageBlock } from "../ArticleImageBlock/ArticleImageBlock";
import { ArticleCodeBlock } from "../ArticleCodeBlock/ArticleCodeBlock";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { ArticleBlockType } from "../../model/types/article";
import cls from "./ArticleDetails.module.scss";

import type { ArticleBlock } from "../../model/types/article";
import type { Article } from "../..";

interface ArticleDetailsContentProps {
  className?: string;
  article: Article;
}

export const ArticleDetailsContent = memo(
  ({ className, article }: ArticleDetailsContentProps) => {
    const { t } = useTranslation(`articleDetails`);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.TEXT:
          return <ArticleTextBlock key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlock key={block.id} block={block} />;
        case ArticleBlockType.CODE:
          return <ArticleCodeBlock key={block.id} block={block} />;
        default:
          return null;
      }
    }, []);

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppVStack gap={`8`} className={classNames(``, {}, [className])}>
            <AppText size={`size_l`} bold title={article.title} />
            <AppText title={article.subtitle} />
            <AppImage
              height={420}
              width={`100%`}
              fallback={
                <AppSkeleton
                  width={`100%`}
                  height={420}
                  borderRadius={`16px`}
                />
              }
              src={article.img}
              alt={t(`ArticleImage`)}
            />
            <AppVStack gap={`4`} max>
              <AppHStack gap={`8`}>
                <AppIcon Svg={EyeIcon} />
                <AppText text={article.views.toString()} />
              </AppHStack>
              <AppHStack gap={`8`}>
                <AppIcon Svg={DateIcon} />
                <AppText text={article.createdAt} />
              </AppHStack>
            </AppVStack>
            <div>{article.blocks.map(renderBlock)}</div>
          </AppVStack>
        }
        off={
          <div className={classNames(``, {}, [className])}>
            <AppHStack justifyContent={`center`} max>
              <AppAvatarDeprecated
                alt={t(`UserAvatar`)}
                size={200}
                src={article.img}
                className={cls.avatar}
              />
            </AppHStack>
            <AppVStack gap={`4`} max>
              <AppTextDeprecated
                size={TextSize.L}
                title={article.title}
                text={article.subtitle}
              />
              <AppHStack gap={`8`}>
                <AppIconDeprecated Svg={EyeIcon} />
                <AppTextDeprecated text={article.views.toString()} />
              </AppHStack>
              <AppHStack gap={`8`}>
                <AppIconDeprecated Svg={DateIcon} />
                <AppTextDeprecated text={article.createdAt} />
              </AppHStack>
            </AppVStack>
            <div>{article.blocks.map(renderBlock)}</div>
          </div>
        }
      />
    );
  },
);

ArticleDetailsContent.displayName = `ArticleDetailsContent`;
