export {
  useAppPageTrigger,
  useAppPageWrapper,
} from "./ui/AppPage/context/hooks";

export { AppPage } from "./ui/AppPage/AppPage";
export type { ScrollRootSchema } from "./model/types/scrollSchema";
export { getPageScrollPosition } from "./model/selectors/scrollSelectors";
export { scrollReducer } from "./model/slice/scrollSlice";
