import type { ReactNode } from "react";
import { Fragment, memo } from "react";
import { Menu } from "@headlessui/react";
import cls from './AppDropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from "shared/utils/classNames";
import { AppVStack } from "../../../appStack";
import type { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../../../appLink/AppLink";

export interface AppDropdownProps {
  className?: string;
  direction?: DropdownDirection;
  items: DropdownItem[];
  trigger: ReactNode;
}

export interface DropdownItem {
  unavailable?: boolean;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export const AppDropdown = memo(({ className, items, trigger, direction = `bottomLeft` }: AppDropdownProps) => {
  return (
        <Menu as={`div`} className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button as={`div`} role={`button`} className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items as={AppVStack} className={classNames(cls.menu, {}, [popupCls[direction]])}>
                {items.filter((item) => !item.unavailable).map((item: DropdownItem, index) => {
                  const content = ({ active }: { active: boolean; }) => (
                        <button disabled={item.disabled} type={`button`} onClick={item.onClick}
                                className={classNames(cls.item, { [popupCls.active]: active }, [])}>
                            {item.content}
                        </button>
                  );

                  return (
                    item.href
                      ? <Menu.Item key={index} as={AppLink} to={item.href}>{content}</Menu.Item>
                      : <Menu.Item key={index} as={Fragment} disabled={item.disabled}>{content}</Menu.Item>
                  );
                })}
            </Menu.Items>
        </Menu>
  );
});

AppDropdown.displayName = `AppDropdown`;
