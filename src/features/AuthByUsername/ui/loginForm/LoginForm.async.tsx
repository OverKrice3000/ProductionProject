import { lazy } from "react";
import type LoginFormSync from "./LoginForm";

const LoginForm = lazy<typeof LoginFormSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./LoginForm`);
});

export default LoginForm;
