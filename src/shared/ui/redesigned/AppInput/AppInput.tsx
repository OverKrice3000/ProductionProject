import { useId, useRef, useEffect, memo } from "react";

import { useFocus } from "../../../utils/hooks/useFocus";
import cls from "./AppInput.module.scss";
import { classNames } from "../../../utils/classNames";

import type { Write } from "../../../types/types";
import type {
  AriaRole,
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
} from "react";

type AppInputProps = Write<
  InputHTMLAttributes<HTMLInputElement>,
  {
    role?: AriaRole;
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
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
    addonLeft,
    addonRight,
    ...other
  }: AppInputProps) => {
    const { isFocus, bindFocus } = useFocus();

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
        className={classNames(
          cls.AppInput,
          {
            [cls.readonly]: !!readOnly,
            [cls.focused]: isFocus,
            [cls.withAddonLeft]: !!addonLeft,
            [cls.withAddonRight]: !!addonRight,
          },
          [className],
        )}
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        <input
          {...other}
          {...bindFocus}
          id={inputId}
          aria-labelledby={labelId}
          ref={ref}
          className={cls.AppInputInternal}
          type={type}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        <div className={cls.addonRight}>{addonRight}</div>
      </div>
    );
  },
);

AppInput.displayName = `AppInput`;
