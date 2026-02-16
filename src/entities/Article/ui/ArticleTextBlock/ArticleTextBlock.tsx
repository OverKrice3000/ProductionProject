import { memo } from "react";

import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

import cls from "./ArticleTextBlock.module.scss";

import type { ArticleTextBlockData } from "../../model/types/article";

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockData;
}

export const ArticleTextBlock = memo(
  ({ className, block }: ArticleTextBlockProps) => {
    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <div className={classNames(``, {}, [className])}>
            {block.title && (
              <AppText title={block.title} className={cls.title} />
            )}
            <div className={cls.paragraphs}>
              {block.paragraphs.map((paragraph, index) => (
                <AppText key={index} text={paragraph} />
              ))}
            </div>
          </div>
        }
        off={
          <div className={classNames(``, {}, [className])}>
            {block.title && (
              <AppTextDeprecated title={block.title} className={cls.title} />
            )}
            <div className={cls.paragraphs}>
              {block.paragraphs.map((paragraph, index) => (
                <AppTextDeprecated key={index} text={paragraph} />
              ))}
            </div>
          </div>
        }
      />
    );
  },
);

ArticleTextBlock.displayName = `ArticleTextBlock`;
