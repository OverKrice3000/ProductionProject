import { memo } from "react";

import { ArticleViewSelector } from "@/entities/Article";
import { classNames } from "@/shared/utils/classNames";

import { useArticleFilters } from "../../lib/hooks/useArticleFilters";

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  ({ className }: ViewSelectorContainerProps) => {
    const { view, onChangeView } = useArticleFilters();

    return (
      <ArticleViewSelector
        className={classNames(``, {}, [className])}
        view={view}
        onViewClick={onChangeView}
      />
    );
  },
);

ViewSelectorContainer.displayName = `ViewSelectorContainer`;
