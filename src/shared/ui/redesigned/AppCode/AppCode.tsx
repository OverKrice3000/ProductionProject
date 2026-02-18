import { useCallback, memo } from "react";

import cls from "./AppCode.module.scss";
import { classNames } from "../../../utils/classNames";
import { AppIcon } from "../AppIcon";
import CopyIcon from "../../../assets/icons/redesigned/copy.svg";
import { AppButton } from "../AppButton";

interface AppCodeProps {
  className?: string;
  text: string;
}

export const AppCode = memo(({ className, text }: AppCodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.AppCode, {}, [className])}>
      <AppButton onClick={onCopy} className={cls.copyBtn} variant={`clear`}>
        <AppIcon width={32} height={32} Svg={CopyIcon} />
      </AppButton>
      <code>{text}</code>
    </pre>
  );
});

AppCode.displayName = `AppCode`;
