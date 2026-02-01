import cls from "./AppPage.module.scss";
import { classNames } from "shared/utils/classNames";
import type { MutableRefObject, ReactNode, UIEvent } from "react";
import { useCallback, useRef, memo } from "react";
import { useInfiniteScroll } from "shared/utils/hooks/useInfiniteScroll";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { scrollActions } from "widgets/AppPage/model/slice/scrollSlice";
import { useLocation } from "react-router";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";
import { useSelector } from "react-redux";
import type { ScrollRootSchema } from "widgets/AppPage";
import { getPageScrollPosition } from "widgets/AppPage";
import { useThrottle } from "shared/utils/hooks/useThrottle";
import { scrollMemoizeThrottleDelay } from "widgets/AppPage/model/constants/throttle";

interface AppPageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  restoreScroll?: boolean;
}

export const AppPage = memo(({ className, children, onScrollEnd, restoreScroll = true }: AppPageProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: ScrollRootSchema) => getPageScrollPosition(state, pathname));

  const wrapperRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useEnvironmentEffect(useCallback(() => {
    restoreScroll && (wrapperRef.current.scrollTop = scrollPosition);
  }, [restoreScroll, scrollPosition]));

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    restoreScroll && dispatch(scrollActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, [dispatch, pathname, restoreScroll]);
  const onScrollThrottle = useThrottle(onScroll, scrollMemoizeThrottleDelay);

  return (
        <section ref={wrapperRef} className={classNames(cls.AppPage, {}, [className])} onScroll={onScrollThrottle}>
            { children }
            { onScrollEnd && <div className={cls.trigger} ref={triggerRef}></div>}
        </section>
  );
});

AppPage.displayName = `AppPage`;
