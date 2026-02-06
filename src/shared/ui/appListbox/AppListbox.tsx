import type { ReactNode } from 'react';
import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import cls from './AppListbox.module.scss';
import { classNames } from "shared/utils/classNames";
import { AppButton } from "../appButton/AppButton";
import { typedMemo } from "shared/utils/react/appMemo";
import { AppHStack, AppVStack } from "../appStack";
import type { DropdownDirection } from "shared/types/ui";

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

export const AppListbox = typedMemo(<Value extends string = string>({
  items,
  className,
  value,
  defaultValue,
  onChange,
  label,
  readonly,
  direction = `bottomLeft`,
}: AppListboxProps<Value>) => {
  return (
      <AppHStack gap={`8`} className={classNames(``, {}, [className])}>
          {label && <span className={classNames(``, { [cls.readonly]: !!readonly }, [])}>{label + `>`}</span>}
          <Listbox
              disabled={readonly}
              as={`div`}
              className={classNames(cls.AppListbox, {}, [className])}
              value={value}
              onChange={onChange}>
              <Listbox.Button as={`div`} className={cls.trigger}>
                  <AppButton disabled={readonly} className={cls.listboxButton}>{value ?? defaultValue}</AppButton>
              </Listbox.Button>
              <Listbox.Options as={AppVStack} className={classNames(cls.options, {}, [cls[direction]])}>
                  {items?.map((item) => (
                      <Listbox.Option
                          key={item.value}
                          value={item.value}
                          as={Fragment}
                          disabled={item.disabled}
                      >
                          {({ active, selected }) => (
                              <li className={classNames(cls.option, { [cls.active]: active, [cls.selected]: selected, [cls.disabled]: !!item.disabled }, [])}>
                                  {item.content}
                              </li>
                          )}
                      </Listbox.Option>
                  ))}
              </Listbox.Options>
          </Listbox>
      </AppHStack>

  );
});

AppListbox.displayName = `AppListbox`;
