import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/utils/classNames";
import { memo, useCallback, useState } from "react";
import { AppCard } from "@/shared/ui/appCard/AppCard";
import { AppHStack, AppVStack } from "@/shared/ui/appStack";
import { AppText } from "@/shared/ui/appText/AppText";
import { AppStarRating } from "@/shared/ui/appStarRating";
import { AppModal } from "@/shared/ui/appModal/AppModal";
import { AppInput } from "@/shared/ui/appInput/AppInput";
import { AppButton, AppButtonTheme } from "@/shared/ui/appButton/AppButton";
import { BrowserView, MobileView } from "react-device-detect";
import { AppDrawer } from "@/shared/ui/appDrawer/AppDrawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startCount: number) => void;
  onAccept?: (startCount: number, feedback?: string) => void;
}

export const RatingCard = memo(({ className, title, feedbackTitle, hasFeedback, onAccept, onCancel }: RatingCardProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState(``);

  const onSelectRating = useCallback((rating: number) => {
    setStarsCount(rating);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(rating);
    }
  }, [hasFeedback, onAccept]);

  const submitHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(startCount, feedback);
  }, [feedback, onAccept, startCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(startCount);
  }, [onCancel, startCount]);

  const feedbackForm = (
      <>
          <AppText title={feedbackTitle} />
          <AppInput value={feedback} onChange={setFeedback} placeholder={t(`YourRating`)} />
      </>
  );

  return (
        <AppCard className={classNames(``, {}, [className])}>
            <AppVStack gap={`16`} align={`center`}>
                <AppText title={title} />
                <AppStarRating size={40} onRate={onSelectRating} />
            </AppVStack>
            <BrowserView>
                <AppModal isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <AppVStack gap={`32`} max>
                        {feedbackForm}
                        <AppHStack gap={`16`} max justifyContent={`end`}>
                            <AppButton theme={AppButtonTheme.OUTLINE_RED} onClick={cancelHandler}>{t(`Cancel`)}</AppButton>
                            <AppButton theme={AppButtonTheme.OUTLINE} onClick={submitHandler}>{t(`Submit`)}</AppButton>
                        </AppHStack>
                    </AppVStack>
                </AppModal>
            </BrowserView>
            <MobileView>
                <AppDrawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <AppVStack gap={`32`} max>
                        {feedbackForm}
                        <AppButton fullWidth theme={AppButtonTheme.OUTLINE} onClick={submitHandler}>{t(`Submit`)}</AppButton>
                    </AppVStack>
                </AppDrawer>
            </MobileView>
        </AppCard>
  );
});

RatingCard.displayName = `RatingCard`;
