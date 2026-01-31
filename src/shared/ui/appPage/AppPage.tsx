import cls from "./AppPage.module.scss";
import { classNames } from "shared/utils/classNames";
import type { MutableRefObject, ReactNode } from "react";
import { useRef, memo } from "react";
import { useInfiniteScroll } from "shared/utils/hooks/useInfiniteScroll";

interface AppPageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const AppPage = memo(({ className, children, onScrollEnd }: AppPageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
        <section ref={wrapperRef} className={classNames(cls.AppPage, {}, [className])}>
            {children}
            <div ref={triggerRef}></div>
        </section>
  );
});

AppPage.displayName = `AppPage`;
