import type { ScrollRootSchema } from "shared/ui/appPage";
import { createSelector } from "@reduxjs/toolkit";

const getScrollPosition = (state: ScrollRootSchema) => state.scroll.position;
export const getPageScrollPosition = createSelector(
  getScrollPosition,
  (_: ScrollRootSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0);
