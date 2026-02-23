import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppVStack } from "@/shared/ui/AppStack";
import { ScrollToTopButton } from "@/features/ScrollToTopButton";
import { useScrollPosition } from "@/shared/utils/hooks/useDocumentScroll";

import cls from "./ScrollToolbar.module.scss";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  const scrollHeight = useScrollPosition();

  return (
    <AppVStack
      justifyContent={`center`}
      align={`center`}
      maxW
      className={classNames(cls.ScrollToolbar, {}, [className])}
    >
      {scrollHeight !== 0 && <ScrollToTopButton />}
    </AppVStack>
  );
});

ScrollToolbar.displayName = `ScrollToolbar`;
