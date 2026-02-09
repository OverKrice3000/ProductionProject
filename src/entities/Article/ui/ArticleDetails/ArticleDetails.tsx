import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppVStack } from "@/shared/ui/AppStack";

import { ArticleDetailsContentError } from "./ArticleDetailsContentError";
import { ArticleDetailsContentLoading } from "./ArticleDetailsContentLoading";
import { ArticleDetailsContent } from "./ArticleDetailsContent";

import type { Article } from "../../model/types/article";

interface ArticleDetailsProps {
  article?: Article;
  isLoading?: boolean;
  error?: string;
  className?: string;
}

export const ArticleDetails = memo(({ className, article, isLoading, error }: ArticleDetailsProps) => {
  return (
        <AppVStack gap={`16`} max className={classNames(``, {}, [className])}>
            {isLoading ? <ArticleDetailsContentLoading /> : article ? <ArticleDetailsContent article={article} /> : <ArticleDetailsContentError error={error} />}
        </AppVStack>
  );
});

ArticleDetails.displayName = `ArticleDetails`;
