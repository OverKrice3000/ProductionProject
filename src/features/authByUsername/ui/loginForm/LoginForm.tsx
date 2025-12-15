import cls from "./LoginForm.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { AppInput } from "shared/ui/appInput/AppInput";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { getUsername } from "features/authByUsername/model/selectors/getUsername/getUsername";
import { getPassword } from "features/authByUsername/model/selectors/getPassword/getPassword";
import { loginByUsername } from "features/authByUsername/model/services/loginByUsername/loginByUsername";
import { getError } from "features/authByUsername/model/selectors/getError/getError";
import { getIsLoading } from "features/authByUsername/model/selectors/getIsLoading/getIsLoading";
import { AppText, TextTheme } from "shared/ui/appText/AppText";
import { useReducer } from "shared/utils/hooks/useReducer";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";

interface LoginFormProps {
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
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <AppText title={t(`AuthorizationForm`)}></AppText>
      {error && <AppText text={t(error)} theme={TextTheme.ERROR} />}
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
