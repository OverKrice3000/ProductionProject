import { memo } from "react";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppCode as AppCodeDeprecated } from "@/shared/ui/deprecated/AppCode";
import { classNames } from "@/shared/utils/classNames";
import { AppCode } from "@/shared/ui/redesigned/AppCode";

import cls from "./ArticleCodeBlock.module.scss";

import type { ArticleCodeBlockData } from "../../model/types/article";

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockData;
}

export const ArticleCodeBlock = memo(
  ({ className, block }: ArticleCodeBlockProps) => {
    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
            <AppCode text={block.code} />
          </div>
        }
        off={
          <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
            <AppCodeDeprecated text={block.code} />
          </div>
        }
      />
    );
  },
);

ArticleCodeBlock.displayName = `ArticleCodeBlock`;
