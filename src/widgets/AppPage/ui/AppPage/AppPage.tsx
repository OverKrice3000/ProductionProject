import { useCallback, useRef, memo } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import { toggleFeatures } from "@/shared/utils/featureFlags";
import type { AppFlexProps } from "@/shared/ui/AppStack/appFlex/AppFlex";
import { classNames } from "@/shared/utils/classNames";
import { useThrottle } from "@/shared/utils/hooks/useThrottle";
import { AppVStack } from "@/shared/ui/AppStack";
import { useInfiniteScroll } from "@/shared/utils/hooks/useInfiniteScroll";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { useEnvironmentEffect } from "@/shared/utils/hooks/useEnvironmentEffect";

import { scrollActions } from "../../model/slice/scrollSlice";
import cls from "./AppPage.module.scss";
import { scrollMemoizeThrottleDelay } from "../../model/constants/throttle";
import { AppPageContext } from "./context/context";
import { getPageScrollPosition } from "../../model/selectors/scrollSelectors";

import type { MutableRefObject, ReactNode, UIEvent } from "react";
import type { ScrollRootSchema } from "../../model/types/scrollSchema";

interface AppPageProps extends AppFlexProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  restoreScroll?: boolean;
}

export const AppPage = memo(
  ({
    className,
    children,
    onScrollEnd,
    restoreScroll = true,
    ...other
  }: AppPageProps) => {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: ScrollRootSchema) =>
      getPageScrollPosition(state, pathname),
    );

    const wrapperRef = useRef<HTMLDivElement>(
      null,
    ) as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef<HTMLDivElement>(
      null,
    ) as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
      triggerRef,
      wrapperRef: toggleFeatures({
        name: `isAppRedesigned`,
        on: () => undefined,
        off: () => wrapperRef,
      }),
      callback: onScrollEnd,
    });

    useEnvironmentEffect(
      useCallback(() => {
        restoreScroll &&
          scrollPosition !== wrapperRef.current.scrollTop &&
          (wrapperRef.current.scrollTop = scrollPosition);
      }, [restoreScroll, scrollPosition]),
    );

    const onScroll = useCallback(
      (e: UIEvent<HTMLDivElement>) => {
        restoreScroll &&
          scrollPosition !== wrapperRef.current.scrollTop &&
          dispatch(
            scrollActions.setScrollPosition({
              path: pathname,
              position: e.currentTarget.scrollTop,
            }),
          );
      },
      [dispatch, pathname, restoreScroll, scrollPosition],
    );
    const onScrollThrottle = useThrottle(onScroll, scrollMemoizeThrottleDelay);

    const contextValue = {
      wrapperRef,
      triggerRef,
    };

    const appPageClass = toggleFeatures({
      name: `isAppRedesigned`,
      on: () => cls.AppPageRedesigned,
      off: () => cls.AppPage,
    });

    return (
      <AppPageContext.Provider value={contextValue}>
        <AppVStack
          as="main"
          max
          {...other}
          ref={wrapperRef}
          className={classNames(appPageClass, {}, [className])}
          onScroll={onScrollThrottle}
        >
          {children}
          {onScrollEnd && <div className={cls.trigger} ref={triggerRef}></div>}
        </AppVStack>
      </AppPageContext.Provider>
    );
  },
);

AppPage.displayName = `AppPage`;
