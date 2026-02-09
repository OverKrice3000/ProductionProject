import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppText } from "@/shared/ui/AppText";

import cls from "./ArticleTextBlock.module.scss";

import type { ArticleTextBlockData } from "../../model/types/article";

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
