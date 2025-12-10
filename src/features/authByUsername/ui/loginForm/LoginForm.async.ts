import { lazy } from "react";
import type LoginForm from "features/authByUsername/ui/loginForm/LoginForm";

const LoginFormAsync = lazy<typeof LoginForm>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./LoginForm`);
});

export { LoginFormAsync as LoginForm };
