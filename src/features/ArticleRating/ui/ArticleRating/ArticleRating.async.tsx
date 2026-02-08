import { lazy, Suspense } from "react";
import type ArticleRatingSync from "./ArticleRating";
import type { ArticleRatingProps } from "./ArticleRating";
import { AppSkeleton } from "@/shared/ui/appSkeleton/AppSkeleton";

const ArticleRatingLazy = lazy<typeof ArticleRatingSync>(async () => await import(`./ArticleRating`));

const ArticleRating = (props: ArticleRatingProps) => {
  return (
      <Suspense fallback={<AppSkeleton width={`100%`} height={120} />}>
        <ArticleRatingLazy {...props} />
      </Suspense>
  );
};

export default ArticleRating;
