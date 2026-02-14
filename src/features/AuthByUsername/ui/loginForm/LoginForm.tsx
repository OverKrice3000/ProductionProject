import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";

import { AppButton, AppButtonTheme } from "@/shared/ui/deprecated/AppButton";
import { AppInput } from "@/shared/ui/deprecated/AppInput";
import { AppText, TextTheme } from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";

import cls from "./LoginForm.module.scss";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getUsername } from "../../model/selectors/getUsername/getUsername";
import { getPassword } from "../../model/selectors/getPassword/getPassword";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getError } from "../../model/selectors/getError/getError";
import { getIsLoading } from "../../model/selectors/getIsLoading/getIsLoading";

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

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === `fulfilled`) {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <AppText title={t(`AuthorizationForm`)}></AppText>
      {error && (
        <AppText role={`alert`} text={t(error)} theme={TextTheme.ERROR} />
      )}
      <AppInput
        value={username}
        type={`text`}
        placeholder={t(`EnterUsername`)}
        onChange={onChangeUsername}
        autofocus
      ></AppInput>
      <AppInput
        value={password}
        type={`text`}
        placeholder={t(`EnterPassword`)}
        onChange={onChangePassword}
      ></AppInput>
      <AppButton
        theme={AppButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLogin}
        disabled={isLoading}
      >
        {t(`Enter`)}
      </AppButton>
    </form>
  );
});

LoginFormSync.displayName = `LoginForm`;

export default LoginFormSync;
