import { useId, useRef, useEffect, memo } from "react";

import cls from "./AppInput.module.scss";
import { classNames } from "../../utils/classNames";

import type { Write } from "../../types/types";
import type { AriaRole, ChangeEvent, InputHTMLAttributes } from "react";

type AppInputProps = Write<
  InputHTMLAttributes<HTMLInputElement>,
  {
    role?: AriaRole;
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
  }
>;

export const AppInput = memo(
  ({
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    type = `text`,
    readOnly,
    role,
    ...other
  }: AppInputProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    const ref = useRef<HTMLInputElement>(null);

    const inputId = useId();
    const labelId = useId();

    useEffect(() => {
      if (autofocus) {
        ref.current?.focus();
      }
    }, [autofocus]);

    return (
      <div
        role={role}
        className={classNames(cls.AppInput, { [cls.readonly]: !!readOnly }, [
          className,
        ])}
      >
        {placeholder && (
          <label id={labelId} htmlFor={inputId} className={cls.placeholder}>
            {placeholder}
            <span aria-hidden={true}>{`>`}</span>
          </label>
        )}
        <input
          {...other}
          id={inputId}
          aria-labelledby={labelId}
          ref={ref}
          className={cls.AppInputInternal}
          type={type}
          onChange={onChangeHandler}
          value={value}
          readOnly={readOnly}
        />
      </div>
    );
  },
);

AppInput.displayName = `AppInput`;
