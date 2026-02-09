import cls from "./LoginForm.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getUsername } from "../../model/selectors/getUsername/getUsername";
import { getPassword } from "../../model/selectors/getPassword/getPassword";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getError } from "../../model/selectors/getError/getError";
import { getIsLoading } from "../../model/selectors/getIsLoading/getIsLoading";
import { AppText, TextTheme } from "@/shared/ui/AppText/AppText";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const LoginFormSync = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  useReducer(`login`, loginReducer);

  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === `fulfilled`) {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <div role="form" className={classNames(cls.LoginForm, {}, [className])}>
      <AppText title={t(`AuthorizationForm`)}></AppText>
      {error && <AppText role={`alert`} text={t(error)} theme={TextTheme.ERROR} />}
      <AppInput value={username} type={`text`} placeholder={t(`EnterUsername`)} onChange={onChangeUsername} autofocus></AppInput>
      <AppInput value={password} type={`text`} placeholder={t(`EnterPassword`)} onChange={onChangePassword}></AppInput>
      <AppButton theme={AppButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLogin} disabled={isLoading}>
        {t(`Enter`)}
      </AppButton>
    </div>
  );
});

LoginFormSync.displayName = `LoginForm`;

export default LoginFormSync;
