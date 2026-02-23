import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppListbox as AppListboxDeprecated } from "@/shared/ui/deprecated/Popups";
import { classNames } from "@/shared/utils/classNames";
import { AppListbox } from "@/shared/ui/redesigned/Popups";

import { Currency } from "../../model/types/currency";

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

export const CurrencySelect = memo(
  ({ className, readOnly, value, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation(`profile`);

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppListbox
            className={classNames(``, {}, [className])}
            label={t(`Currency`)}
            items={options}
            value={value}
            readonly={readOnly}
            onChange={onChangeHandler}
            direction={`rightTop`}
          />
        }
        off={
          <AppListboxDeprecated
            className={classNames(``, {}, [className])}
            label={t(`Currency`)}
            items={options}
            value={value}
            readonly={readOnly}
            onChange={onChangeHandler}
            direction={`rightTop`}
          />
        }
      />
    );
  },
);

CurrencySelect.displayName = `CurrencySelect`;
