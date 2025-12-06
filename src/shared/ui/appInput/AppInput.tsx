import cls from "./AppInput.module.scss";
import { classNames } from "shared/utils/classNames";
import type { Write } from "shared/types/types";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import { useRef, useEffect, memo } from "react";

type AppInputProps = Write<InputHTMLAttributes<HTMLInputElement>, {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}>;

export const AppInput = memo(({ className, value, onChange, placeholder, autofocus, type = `text`, ...other }: AppInputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.AppInput, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>}
      <input {...other} ref={ref} className={cls.AppInputInternal} type={type} onChange={onChangeHandler} value={value} />
    </div>
  );
});
AppInput.displayName = `AppInput`;
