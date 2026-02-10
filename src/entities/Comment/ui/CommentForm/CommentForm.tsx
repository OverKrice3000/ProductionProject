import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppInput } from "@/shared/ui/AppInput";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton";
import { AppHStack } from "@/shared/ui/AppStack";

import cls from "./CommentForm.module.scss";

export interface CommentFormProps {
  className?: string;
  text: string;
  onTextChange: (text: string) => void;
  onSendComment: (text: string) => void;
}

const CommentForm = memo(
  ({ className, onSendComment, onTextChange, text }: CommentFormProps) => {
    const { t } = useTranslation();

    const onSendCommentHandler = useCallback(() => {
      onSendComment(text);
      onTextChange(``);
    }, [onSendComment, onTextChange, text]);

    return (
      <AppHStack
        justifyContent={`between`}
        max
        className={classNames(cls.CommentForm, {}, [className])}
      >
        <form style={{ display: `flex`, width: `100%` }}>
          <AppInput
            value={text}
            onChange={onTextChange}
            placeholder={t(`article:EnterYourComment`)}
            className={cls.input}
          />
          <AppButton
            type="submit"
            theme={AppButtonTheme.OUTLINE}
            onClick={onSendCommentHandler}
          >
            {t(`Send`)}
          </AppButton>
        </form>
      </AppHStack>
    );
  },
);

CommentForm.displayName = `CommentForm`;

export default CommentForm;
