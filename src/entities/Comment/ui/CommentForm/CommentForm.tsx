import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { AppHStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppCard } from "@/shared/ui/redesigned/AppCard";

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
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            border={`borderRound`}
            direction={`row`}
            as={`form`}
            gap={`16`}
            justifyContent={`between`}
            p={`p24`}
            max
            className={classNames(``, {}, [className])}
          >
            <AppInput
              value={text}
              onChange={onTextChange}
              placeholder={t(`article:EnterYourComment`)}
              className={cls.input}
            />
            <AppButton
              type="submit"
              variant={`outline`}
              onClick={onSendCommentHandler}
            >
              {t(`Send`)}
            </AppButton>
          </AppCard>
        }
        off={
          <AppHStack
            as={`form`}
            justifyContent={`between`}
            max
            className={classNames(cls.CommentForm, {}, [className])}
          >
            <AppInputDeprecated
              value={text}
              onChange={onTextChange}
              placeholder={t(`article:EnterYourComment`)}
              className={cls.input}
            />
            <AppButtonDeprecated
              type="submit"
              theme={AppButtonTheme.OUTLINE}
              onClick={onSendCommentHandler}
            >
              {t(`Send`)}
            </AppButtonDeprecated>
          </AppHStack>
        }
      />
    );
  },
);

CommentForm.displayName = `CommentForm`;

export default CommentForm;
