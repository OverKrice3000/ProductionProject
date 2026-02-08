import { lazy, Suspense } from "react";
import type { LoginFormProps } from "./LoginForm";
import type LoginFormSync from "./LoginForm";

const LoginFormLazy = lazy<typeof LoginFormSync>(async () => await import(`./LoginForm`));

const LoginForm = (props: LoginFormProps) => {
  return (
        <Suspense>
            <LoginFormLazy {...props} />
        </Suspense>
  );
};

export default LoginForm;
