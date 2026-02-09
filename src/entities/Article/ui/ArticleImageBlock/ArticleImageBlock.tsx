import cls from "./ArticleImageBlock.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo } from "react";
import type { ArticleImageBlockData } from "../../model/types/article";
import { AppText, TextAlign } from "@/shared/ui/AppText/AppText";

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockData;
}

export const ArticleImageBlock = memo(({ className, block }: ArticleImageBlockProps) => {
  return (
        <div className={classNames(``, {}, [className])}>
            <img src={block.src} className={cls.image} alt={block.title} />
            {block.title && <AppText text={block.title} align={TextAlign.CENTER} />}
        </div>
  );
});

ArticleImageBlock.displayName = `ArticleImageBlock`;
