import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import type { Article } from "entities/article";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";
import { AppText, TextSize } from "shared/ui/appText/AppText";
import EyeIcon from "shared/assets/icons/eye.svg";
import DateIcon from "shared/assets/icons/date.svg";
import { AppIcon } from "shared/ui/appIcon/AppIcon";
import type { ArticleBlock } from "entities/article/model/types/article";
import { ArticleBlockType } from "entities/article/model/types/article";
import { ArticleTextBlock } from "entities/article/ui/ArticleTextBlock/ArticleTextBlock";
import { ArticleImageBlock } from "entities/article/ui/ArticleImageBlock/ArticleImageBlock";
import { ArticleCodeBlock } from "entities/article/ui/ArticleCodeBlock/ArticleCodeBlock";

interface ArticleDetailsContentProps {
  className?: string;
  article: Article;
}

export const ArticleDetailsContent = memo(({ className, article }: ArticleDetailsContentProps) => {
  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} className={cls.block} block={block} />;
      default:
        return null;
    }
  }, []);

  return (
    <div className={classNames(``, {}, [className])}>
        <div className={cls.avatarWrapper} >
            <AppAvatar size={200} src={article.img} className={cls.avatar} />
        </div>
      <AppText className={cls.title} size={TextSize.L} title={article.title} text={article.subtitle} />
        <div className={cls.articleInfo}>
            <AppIcon Svg={EyeIcon} />
            <AppText text={article.views.toString()} />
        </div>
        <div className={cls.articleInfo}>
            <AppIcon Svg={DateIcon} />
            <AppText text={article.createdAt} />
        </div>
        <div className={cls.blocks}>
            {article.blocks.map(renderBlock)}
        </div>
    </div>
  );
});

ArticleDetailsContent.displayName = `ArticleDetailsContent`;
