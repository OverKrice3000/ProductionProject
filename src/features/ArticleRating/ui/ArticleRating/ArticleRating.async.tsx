import { lazy, Suspense } from "react";

import { AppSkeleton } from "@/shared/ui/AppSkeleton";

import type ArticleRatingSync from "./ArticleRating";
import type { ArticleRatingProps } from "./ArticleRating";

const ArticleRatingLazy = lazy<typeof ArticleRatingSync>(async () => await import(`./ArticleRating`));

const ArticleRating = (props: ArticleRatingProps) => {
  return (
      <Suspense fallback={<AppSkeleton width={`100%`} height={120} />}>
        <ArticleRatingLazy {...props} />
      </Suspense>
  );
};

export default ArticleRating;
