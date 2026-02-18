import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import {
  AppText as AppTextDeprecated,
  TextTheme,
} from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";
import { useReducer } from "@/shared/utils/hooks/useReducer";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppVStack } from "@/shared/ui/AppStack";

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
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppVStack
          gap={`16`}
          as={`form`}
          className={classNames(cls.LoginFormRedesigned, {}, [className])}
        >
          <AppText title={t(`AuthorizationForm`)}></AppText>
          {error && (
            <AppText role={`alert`} text={t(error)} variant={`error`} />
          )}
          <AppInput
            value={username}
            type={`text`}
            placeholder={t(`EnterUsername`)}
            onChange={onChangeUsername}
            autofocus
          />
          <AppInput
            value={password}
            type={`text`}
            placeholder={t(`EnterPassword`)}
            onChange={onChangePassword}
          />
          <AppButton
            variant={`outline`}
            className={cls.loginBtn}
            onClick={onLogin}
            disabled={isLoading}
          >
            {t(`Enter`)}
          </AppButton>
        </AppVStack>
      }
      off={
        <form className={classNames(cls.LoginForm, {}, [className])}>
          <AppTextDeprecated title={t(`AuthorizationForm`)}></AppTextDeprecated>
          {error && (
            <AppTextDeprecated
              role={`alert`}
              text={t(error)}
              theme={TextTheme.ERROR}
            />
          )}
          <AppInputDeprecated
            value={username}
            type={`text`}
            placeholder={t(`EnterUsername`)}
            onChange={onChangeUsername}
            autofocus
          />
          <AppInputDeprecated
            value={password}
            type={`text`}
            placeholder={t(`EnterPassword`)}
            onChange={onChangePassword}
          />
          <AppButtonDeprecated
            theme={AppButtonTheme.OUTLINE}
            className={cls.loginBtn}
            onClick={onLogin}
            disabled={isLoading}
          >
            {t(`Enter`)}
          </AppButtonDeprecated>
        </form>
      }
    />
  );
});

LoginFormSync.displayName = `LoginForm`;

export default LoginFormSync;
