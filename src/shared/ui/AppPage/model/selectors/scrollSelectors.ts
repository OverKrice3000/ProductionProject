import { createSelector } from "@reduxjs/toolkit";

import type { ScrollRootSchema } from "../..";

const getScrollPosition = (state: ScrollRootSchema) => state.scroll.position;
export const getPageScrollPosition = createSelector(
  getScrollPosition,
  (_: ScrollRootSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0,
);
