import cls from "./CommentForm.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { AppInput } from "shared/ui/appInput/AppInput";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { AppHStack } from "shared/ui/appStack";

interface AddCommentFormProps {
  className?: string;
  text: string;
  onTextChange: (text: string) => void;
  onSendComment: (text: string) => void;
}

const CommentForm = memo(({ className, onSendComment, onTextChange, text }: AddCommentFormProps) => {
  const { t } = useTranslation();

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text);
    onTextChange(``);
  }, [onSendComment, onTextChange, text]);

  return (
        <AppHStack justifyContent={`between`} max className={classNames(cls.AddCommentForm, {}, [className])}>
          <AppInput value={text} onChange={onTextChange} placeholder={t(`article:EnterYourComment`)} className={cls.input} />
          <AppButton theme={AppButtonTheme.OUTLINE} onClick={onSendCommentHandler}>{t(`Send`)}</AppButton>
        </AppHStack>
  );
});

CommentForm.displayName = `AddCommentForm`;

export default CommentForm;
