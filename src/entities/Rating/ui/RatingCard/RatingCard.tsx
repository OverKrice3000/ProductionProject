import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { classNames } from "@/shared/utils/classNames";
import { AppCard } from "@/shared/ui/AppCard";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { AppText } from "@/shared/ui/AppText";
import { AppStarRating } from "@/shared/ui/AppStarRating";
import { AppModal } from "@/shared/ui/AppModal";
import { AppInput } from "@/shared/ui/AppInput";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton";
import { AppDrawer } from "@/shared/ui/AppDrawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasRatingTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startCount: number) => void;
  onAccept?: (startCount: number, feedback?: string) => void;
  selectedRating?: number;
}

export const RatingCard = memo(({ className, title = ``, feedbackTitle = ``, hasRatingTitle = ``, hasFeedback, onAccept, onCancel, selectedRating = 0 }: RatingCardProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(selectedRating);
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
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const feedbackForm = (
      <>
          <AppText title={feedbackTitle} />
          <AppInput value={feedback} onChange={setFeedback} placeholder={t(`YourRating`)} />
      </>
  );

  return (
        <AppCard max className={classNames(``, {}, [className])}>
            <AppVStack max gap={`16`} align={`center`}>
                <AppText title={starsCount ? hasRatingTitle : title} />
                <AppStarRating size={40} onRate={onSelectRating} selectedRating={selectedRating} />
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
