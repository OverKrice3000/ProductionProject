import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import type { ArticleView } from "@/entities/Article";
import { ArticleViewSelector } from "@/entities/Article";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { classNames } from "@/shared/utils/classNames";

import { articlesListActions } from "../../model/slice/articlesListSlice/articlesListSlice";
import { getArticlesListView } from "../../model/selector/articlesListSelectors";

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  ({ className }: ViewSelectorContainerProps) => {
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesListView);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesListActions.setView(view));
      },
      [dispatch],
    );

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
