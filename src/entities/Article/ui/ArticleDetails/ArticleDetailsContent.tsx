import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/utils/classNames";
import { AppAvatar } from "@/shared/ui/AppAvatar";
import { AppText, TextSize } from "@/shared/ui/AppText";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import DateIcon from "@/shared/assets/icons/date.svg";
import { AppIcon } from "@/shared/ui/AppIcon";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";

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

export const ArticleDetailsContent = memo(({ className, article }: ArticleDetailsContentProps) => {
  const { t } = useTranslation();

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
    <div className={classNames(``, {}, [className])}>
        <AppHStack justifyContent={`center`} max >
            <AppAvatar alt={t(`UserAvatar`)} size={200} src={article.img} className={cls.avatar} />
        </AppHStack>
        <AppVStack gap={`4`} max>
            <AppText size={TextSize.L} title={article.title} text={article.subtitle} />
            <AppHStack gap={`8`}>
                <AppIcon Svg={EyeIcon} />
                <AppText text={article.views.toString()} />
            </AppHStack>
            <AppHStack gap={`8`}>
                <AppIcon Svg={DateIcon} />
                <AppText text={article.createdAt} />
            </AppHStack>
        </AppVStack>
        <div>
            {article.blocks.map(renderBlock)}
        </div>
    </div>
  );
});

ArticleDetailsContent.displayName = `ArticleDetailsContent`;
