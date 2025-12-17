import { useTranslation } from "react-i18next";
import { AppSelect } from "shared/ui/appSelect/AppSelect";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { Currency } from "entities/currency/model/types/currency";

interface CurrencySelectProps {
  className?: string;
  readOnly?: boolean;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo(({ className, readOnly, value, onChange }: CurrencySelectProps) => {
  const { t } = useTranslation(`profile`);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <AppSelect
      className={classNames(``, {}, [className])}
      label={t(`Currency`)}
      options={options}
      value={value}
      readOnly={readOnly}
      onChange={onChangeHandler}
    />
  );
});

CurrencySelect.displayName = `CurrencySelect`;
