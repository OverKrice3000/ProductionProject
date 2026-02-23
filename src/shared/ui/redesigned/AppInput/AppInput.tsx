import { useId, useRef, useEffect, memo } from "react";

import { AppHStack } from "../../AppStack";
import { useFocus } from "../../../utils/hooks/useFocus";
import cls from "./AppInput.module.scss";
import { classNames } from "../../../utils/classNames";
import { AppText } from "../AppText";

import type { Write } from "../../../types/types";
import type {
  AriaRole,
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
} from "react";

type InputSize = `size_s` | `size_m` | `size_l`;

type AppInputProps = Write<
  InputHTMLAttributes<HTMLInputElement>,
  {
    role?: AriaRole;
    className?: string;
    label?: string;
    value?: string | number;
    size?: InputSize;
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
    size = `size_m`,
    readOnly,
    role,
    label,
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
      <AppHStack maxW gap="8" className={classNames(``, {}, [className])}>
        <AppText
          text={label}
          className={classNames(``, { [cls.readonly]: !!readOnly }, [])}
        />
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
            [cls[size]],
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
      </AppHStack>
    );
  },
);

AppInput.displayName = `AppInput`;
