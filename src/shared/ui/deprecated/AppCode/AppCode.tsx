import { useCallback, memo } from "react";

import { AppButton, AppButtonTheme } from "../AppButton/AppButton";
import cls from "./AppCode.module.scss";
import { classNames } from "../../../utils/classNames";
import { AppIcon, AppIconColor } from "../AppIcon/AppIcon";
import CopyIcon from "../../../assets/icons/copy.svg";

interface AppCodeProps {
  className?: string;
  text: string;
}

/**
 * @deprecated
 */
export const AppCode = memo(({ className, text }: AppCodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.AppCode, {}, [className])}>
      <AppButton
        onClick={onCopy}
        className={cls.copyBtn}
        theme={AppButtonTheme.CLEAR}
      >
        <AppIcon
          color={AppIconColor.INVERTED_PRIMARY}
          className={cls.copyIcon}
          Svg={CopyIcon}
        />
      </AppButton>
      <code>{text}</code>
    </pre>
  );
});

AppCode.displayName = `AppCode`;
