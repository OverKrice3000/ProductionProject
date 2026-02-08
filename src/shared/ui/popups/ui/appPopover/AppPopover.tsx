import cls from "./AppPopover.module.scss";
import popupCls from '../../styles/popup.module.scss';
import { classNames } from "@/shared/utils/classNames";
import type { ReactNode } from "react";
import { memo } from "react";
import { Popover } from "@headlessui/react";
import type { DropdownDirection } from "@/shared/types/ui";

interface AppPopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export const AppPopover = memo(({ className, trigger, direction = `bottomLeft`, children }: AppPopoverProps) => {
  return (
      <Popover className={classNames(popupCls.popup, {}, [className])}>
        <Popover.Button aria-haspopup="dialog" as={`div`} role={`button`} className={popupCls.trigger}>{trigger}</Popover.Button>
        <Popover.Panel className={classNames(cls.panel, {}, [popupCls[direction]])}>
            {children}
        </Popover.Panel>
      </Popover>
  );
});

AppPopover.displayName = `AppPopover`;
