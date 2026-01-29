import cls from "./AddCommentForm.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback } from "react";
import { AppInput } from "shared/ui/appInput/AppInput";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { useReducer } from "shared/utils/hooks/useReducer";
import { addCommentFormActions, addCommentFormReducer } from "features/addCommentForm/model/slice/addCommentFormSlice/addCommentFormSlice";
import { getCommentFormText } from "features/addCommentForm/model/selectors/addCommentFormSelectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useReducer(`addCommentForm`, addCommentFormReducer);

  const text = useSelector(getCommentFormText) ?? ``;

  const onTextChange = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text));
  }, [dispatch]);

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text);
    onTextChange(``);
  }, [onSendComment, onTextChange, text]);

  return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
          <AppInput value={text} onChange={onTextChange} placeholder={t(`article:EnterYourComment`)} className={cls.input} />
          <AppButton theme={AppButtonTheme.OUTLINE} onClick={onSendCommentHandler}>{t(`Send`)}</AppButton>
        </div>
  );
});

AddCommentForm.displayName = `AddCommentForm`;

export default AddCommentForm;
