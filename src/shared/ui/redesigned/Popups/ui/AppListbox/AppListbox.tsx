import { Fragment, useMemo } from "react";
import { Listbox } from "@headlessui/react";

import { AppIcon } from "../../../AppIcon";
import ArrowIcon from "../../../../../assets/icons/redesigned/arrowBottom.svg";
import { AppButton } from "../../../AppButton/AppButton";
import cls from "./AppListbox.module.scss";
import popupCls from "../../styles/popup.module.scss";
import { classNames } from "../../../../../utils/classNames";
import { typedMemo } from "../../../../../utils/react/appMemo";
import { AppHStack, AppVStack } from "../../../../AppStack";

import type { ReactNode } from "react";
import type { DropdownDirection } from "../../../../../types/ui";

export interface AppListboxProps<Value extends string = string> {
  items?: Array<ListboxItem<Value>>;
  className?: string;
  value?: Value;
  defaultValue?: Value;
  onChange: (value: Value) => void;
  readonly?: boolean;
  label?: string;
  direction?: DropdownDirection;
}

export interface ListboxItem<Value extends string = string> {
  value: Value;
  content: ReactNode;
  disabled?: boolean;
}

export const AppListbox = typedMemo(
  <Value extends string = string>({
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = `bottomLeft`,
  }: AppListboxProps<Value>) => {
    const selectedItem = useMemo(() => {
      return items?.find((item) => item.value === (value ?? defaultValue));
    }, [defaultValue, items, value]);

    return (
      <AppHStack gap={`8`} className={classNames(``, {}, [className])}>
        {label && (
          <p className={classNames(``, { [cls.readonly]: !!readonly }, [])}>
            {label}
          </p>
        )}
        <Listbox
          disabled={readonly}
          as={`div`}
          className={classNames(popupCls.popup, {}, [])}
          value={value}
          onChange={onChange}
        >
          <Listbox.Button
            aria-disabled={readonly}
            as={AppButton}
            className={classNames(cls.listboxButton, {}, [popupCls.trigger])}
            variant={`filled`}
            disabled={readonly}
            addonRight={
              <AppIcon
                width={32}
                height={32}
                Svg={ArrowIcon}
                color={`inherit`}
              />
            }
          >
            {selectedItem?.content ?? ``}
          </Listbox.Button>
          <Listbox.Options
            as={AppVStack}
            className={classNames(cls.options, {}, [
              popupCls[direction],
              popupCls.menu,
            ])}
          >
            {items?.map((item) => (
              <Listbox.Option
                key={item.value}
                value={item.value}
                as={Fragment}
                disabled={item.disabled}
              >
                {({ active, selected }) => (
                  <li
                    className={classNames(
                      cls.option,
                      {
                        [popupCls.active]: active,
                        [cls.selected]: selected,
                        [cls.disabled]: !!item.disabled,
                      },
                      [],
                    )}
                  >
                    {item.content}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </AppHStack>
    );
  },
);

AppListbox.displayName = `AppListbox`;
