import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import CircleUpIcon from "@/shared/assets/icons/redesigned/circle-up.svg";

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scroll({ top: 0, behavior: `smooth` });
  };

  return (
    <AppIcon
      width={32}
      height={32}
      clickable
      Svg={CircleUpIcon}
      onClick={onClick}
      className={classNames(``, {}, [className])}
    />
  );
});

ScrollToTopButton.displayName = `ScrollToTopButton`;
