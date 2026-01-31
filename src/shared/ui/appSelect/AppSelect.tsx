import cls from "./AppSelect.module.scss";
import { classNames } from "shared/utils/classNames";
import type { ChangeEvent } from "react";
import { memo, useMemo } from "react";

interface AppSelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

interface SelectOption {
  value: string;
  content: string;
}

export const AppSelect = memo(({ className, label, options, readOnly, value, onChange }: AppSelectProps) => {
  const optionsList = useMemo(() => {
    return options?.map((option) => (
      <option className={cls.option} value={option.value} key={option.value}>{option.content}</option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <div className={classNames(cls.AppSelect, { [cls.readonly]: !!readOnly }, [className])}>
      {label && <span className={cls.label}>{label + `>`}</span>}
      <select disabled={readOnly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});

AppSelect.displayName = `AppSelect`;
