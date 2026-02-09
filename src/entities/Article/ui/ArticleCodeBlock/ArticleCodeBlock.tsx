import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppCode } from "@/shared/ui/AppCode";

import cls from "./ArticleCodeBlock.module.scss";

import type { ArticleCodeBlockData } from "../../model/types/article";

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockData;
}

export const ArticleCodeBlock = memo(
  ({ className, block }: ArticleCodeBlockProps) => {
    return (
      <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
        <AppCode text={block.code} />
      </div>
    );
  },
);

ArticleCodeBlock.displayName = `ArticleCodeBlock`;
