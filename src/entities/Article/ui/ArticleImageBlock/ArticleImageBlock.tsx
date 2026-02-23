import { memo } from "react";

import {
  AppText as AppTextDeprecated,
  TextAlign,
} from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppText } from "@/shared/ui/redesigned/AppText";

import cls from "./ArticleImageBlock.module.scss";

import type { ArticleImageBlockData } from "../../model/types/article";

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockData;
}

export const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => {
    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <div className={classNames(``, {}, [className])}>
            <img src={block.src} className={cls.image} alt={block.title} />
            {block.title && <AppText text={block.title} align={`center`} />}
          </div>
        }
        off={
          <div className={classNames(``, {}, [className])}>
            <img src={block.src} className={cls.image} alt={block.title} />
            {block.title && (
              <AppTextDeprecated text={block.title} align={TextAlign.CENTER} />
            )}
          </div>
        }
      />
    );
  },
);

ArticleImageBlock.displayName = `ArticleImageBlock`;
