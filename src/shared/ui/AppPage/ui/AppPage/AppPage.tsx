import { useCallback, useRef, memo } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import { useInfiniteScroll } from '../../../../utils/hooks/useInfiniteScroll';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';
import { scrollActions } from "../../model/slice/scrollSlice";
import { useEnvironmentEffect } from '../../../../utils/hooks/useEnvironmentEffect';
import { classNames } from '../../../../utils/classNames';
import cls from "./AppPage.module.scss";
import { useThrottle } from '../../../../utils/hooks/useThrottle';
import { scrollMemoizeThrottleDelay } from "../../model/constants/throttle";
import { AppPageContext } from "./context/context";
import { AppVStack } from "../../../AppStack";
import { getPageScrollPosition } from "../../model/selectors/scrollSelectors";

import type { MutableRefObject, ReactNode, UIEvent } from "react";
import type { ScrollRootSchema } from "../../model/types/scrollSchema";
import type { AppFlexProps } from '../../../AppStack/appFlex/AppFlex';

interface AppPageProps extends Omit<AppFlexProps, `children`> {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  restoreScroll?: boolean;
}

export const AppPage = memo(({ className, children, onScrollEnd, restoreScroll = true, ...other }: AppPageProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: ScrollRootSchema) => getPageScrollPosition(state, pathname));

  const wrapperRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useEnvironmentEffect(useCallback(() => {
    restoreScroll &&
    scrollPosition !== wrapperRef.current.scrollTop &&
    (wrapperRef.current.scrollTop = scrollPosition);
  }, [restoreScroll, scrollPosition]));

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    restoreScroll &&
    scrollPosition !== wrapperRef.current.scrollTop &&
    dispatch(scrollActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, [dispatch, pathname, restoreScroll, scrollPosition]);
  const onScrollThrottle = useThrottle(onScroll, scrollMemoizeThrottleDelay);

  const contextValue = {
    wrapperRef,
    triggerRef,
  };

  return (
      <AppPageContext.Provider value={contextValue}>
        <AppVStack max {...other} ref={wrapperRef} className={classNames(cls.AppPage, {}, [className])} onScroll={onScrollThrottle}>
          { children }
          { onScrollEnd && <div className={cls.trigger} ref={triggerRef}></div>}
        </AppVStack>
      </AppPageContext.Provider>
  );
});

AppPage.displayName = `AppPage`;
