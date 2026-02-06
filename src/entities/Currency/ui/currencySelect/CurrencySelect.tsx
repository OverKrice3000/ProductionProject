import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";
import { AppListbox } from "shared/ui/appListbox/AppListbox";

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
      <AppListbox
          className={classNames(``, {}, [className])}
          label={t(`Currency`)}
          items={options}
          value={value}
          readonly={readOnly}
          onChange={onChangeHandler}
          direction={`rightTop`}
      />
  );
});

CurrencySelect.displayName = `CurrencySelect`;
