export { useAppPageTrigger, useAppPageWrapper } from "@/shared/ui/appPage/ui/AppPage/context/hooks";

export { AppPage } from "@/shared/ui/appPage/ui/AppPage/AppPage";
export type { ScrollRootSchema } from "@/shared/ui/appPage/model/types/scrollSchema";
export { getPageScrollPosition } from "@/shared/ui/appPage/model/selectors/scrollSelectors";
export { scrollReducer } from "@/shared/ui/appPage/model/slice/scrollSlice";
