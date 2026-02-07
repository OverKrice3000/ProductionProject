import cls from "./AppInput.module.scss";
import { classNames } from "shared/utils/classNames";
import type { Write } from "shared/types/types";
import type { AriaRole, ChangeEvent, InputHTMLAttributes } from "react";
import { useRef, useEffect, memo } from "react";

type AppInputProps = Write<InputHTMLAttributes<HTMLInputElement>, {
  role?: AriaRole;
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}>;

export const AppInput = memo(({ className, value, onChange, placeholder, autofocus, type = `text`, readOnly, role, ...other }: AppInputProps) => {
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
    <label role={role} className={classNames(cls.AppInput, { [cls.readonly]: !!readOnly }, [className])}>
          {placeholder && <p aria-atomic={`true`} className={cls.placeholder}>
            {placeholder}
            <span aria-hidden={true}>{`>`}</span>
          </p>}
          <input
              {...other}
              ref={ref}
              className={cls.AppInputInternal}
              type={type}
              onChange={onChangeHandler}
              value={value}
              readOnly={readOnly}
          />
    </label>
  );
});

AppInput.displayName = `AppInput`;
