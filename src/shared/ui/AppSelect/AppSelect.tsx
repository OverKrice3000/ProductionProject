import { useMemo } from "react";

import cls from "./AppSelect.module.scss";
import { classNames } from "../../utils/classNames";
import { typedMemo } from "../../utils/react/appMemo";

import type { ChangeEvent } from "react";

interface AppSelectProps<Value extends string> {
  className?: string;
  label?: string;
  options?: Array<SelectOption<Value>>;
  readOnly?: boolean;
  value?: Value;
  onChange?: (value: Value) => void;
}

export interface SelectOption<Value extends string> {
  value: Value;
  content: string;
}

export const AppSelect = typedMemo(
  <Value extends string>({
    className,
    label,
    options,
    readOnly,
    value,
    onChange,
  }: AppSelectProps<Value>) => {
    const optionsList = useMemo(() => {
      return options?.map((option) => (
        <option className={cls.option} value={option.value} key={option.value}>
          {option.content}
        </option>
      ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.currentTarget.value as Value);
    };

    return (
      <div
        className={classNames(cls.AppSelect, { [cls.readonly]: !!readOnly }, [
          className,
        ])}
      >
        {label && (
          <p className={cls.label}>
            {label}
            <span aria-hidden={`true`}>{`>`}</span>
          </p>
        )}
        <select
          disabled={readOnly}
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
        >
          {optionsList}
        </select>
      </div>
    );
  },
);

AppSelect.displayName = `AppSelect`;
