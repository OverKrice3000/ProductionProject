import cls from "./LoginForm.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppButton } from "shared/ui/appButton/AppButton";
import { AppInput } from "shared/ui/appInput/AppInput";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <AppInput type={`text`} placeholder={t(`EnterUsername`)} autofocus></AppInput>
      <AppInput type={`text`} placeholder={t(`EnterPassword`)}></AppInput>
      <AppButton className={cls.loginBtn}>
        {t(`Enter`)}
      </AppButton>
    </div>
  );
};
