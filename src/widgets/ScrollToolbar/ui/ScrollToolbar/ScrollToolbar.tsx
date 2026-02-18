import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppVStack } from "@/shared/ui/AppStack";
import { ScrollToTopButton } from "@/features/ScrollToTopButton";

import cls from "./ScrollToolbar.module.scss";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <AppVStack
      justifyContent={`center`}
      align={`center`}
      max
      className={classNames(cls.ScrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </AppVStack>
  );
});

ScrollToolbar.displayName = `ScrollToolbar`;
