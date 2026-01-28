import cls from "./ArticleTextBlock.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import type { ArticleTextBlockData } from "entities/article/model/types/article";
import { AppText } from "shared/ui/appText/AppText";

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockData;
}

export const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => {
  return (
        <div className={classNames(``, {}, [className])}>
          {block.title && <AppText title={block.title} className={cls.title} />}
          <div className={cls.paragraphs}>
            {block.paragraphs.map((paragraph, index) => (
                <AppText key={index} text={paragraph} />
            ))}
          </div>
        </div>
  );
});

ArticleTextBlock.displayName = `ArticleTextBlock`;
