import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import type { Article } from "../..";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";
import { AppText, TextSize } from "shared/ui/appText/AppText";
import EyeIcon from "shared/assets/icons/eye.svg";
import DateIcon from "shared/assets/icons/date.svg";
import { AppIcon } from "shared/ui/appIcon/AppIcon";
import type { ArticleBlock } from "../../model/types/article";
import { ArticleBlockType } from "../../model/types/article";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { ArticleImageBlock } from "../ArticleImageBlock/ArticleImageBlock";
import { ArticleCodeBlock } from "../ArticleCodeBlock/ArticleCodeBlock";
import { AppHStack, AppVStack } from "shared/ui/appStack";

interface ArticleDetailsContentProps {
  className?: string;
  article: Article;
}

export const ArticleDetailsContent = memo(({ className, article }: ArticleDetailsContentProps) => {
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
            <AppAvatar size={200} src={article.img} className={cls.avatar} />
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
