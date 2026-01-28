import cls from "./ArticleCodeBlock.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import type { ArticleCodeBlockData } from "entities/article/model/types/article";
import { AppCode } from "shared/ui/appCode/AppCode";

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockData;
}

export const ArticleCodeBlock = memo(({ className, block }: ArticleCodeBlockProps) => {
  return (
        <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
            <AppCode text={block.code} />
        </div>
  );
});

ArticleCodeBlock.displayName = `ArticleCodeBlock`;
