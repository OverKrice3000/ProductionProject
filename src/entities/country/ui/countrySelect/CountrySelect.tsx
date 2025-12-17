import { useTranslation } from "react-i18next";
import { AppSelect } from "shared/ui/appSelect/AppSelect";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { Country } from "entities/country/model/types/country";

interface CountrySelectProps {
  className?: string;
  readOnly?: boolean;
  value?: Country;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo(({ className, readOnly, value, onChange }: CountrySelectProps) => {
  const { t } = useTranslation(`profile`);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <AppSelect
      className={classNames(``, {}, [className])}
      label={t(`Country`)}
      options={options}
      value={value}
      readOnly={readOnly}
      onChange={onChangeHandler}
    />
  );
});

CountrySelect.displayName = `CountrySelect`;
