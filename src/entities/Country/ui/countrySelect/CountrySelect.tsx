import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/utils/classNames";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { AppListbox } from "@/shared/ui/Popups/ui/AppListbox/AppListbox";

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
    <AppListbox
      className={classNames(``, {}, [className])}
      label={t(`Country`)}
      items={options}
      value={value}
      readonly={readOnly}
      onChange={onChangeHandler}
      direction={`rightTop`}
    />
  );
});

CountrySelect.displayName = `CountrySelect`;
