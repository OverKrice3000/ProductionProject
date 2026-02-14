import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { AppButton, AppButtonTheme } from "@/shared/ui/deprecated/AppButton";
import { AppInput } from "@/shared/ui/deprecated/AppInput";
import { AppHStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";

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
        as={`form`}
        justifyContent={`between`}
        max
        className={classNames(cls.CommentForm, {}, [className])}
      >
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
      </AppHStack>
    );
  },
);

CommentForm.displayName = `CommentForm`;

export default CommentForm;
