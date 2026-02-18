import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { AppModal } from "@/shared/ui/redesigned/AppModal";
import { AppDrawer } from "@/shared/ui/redesigned/AppDrawer";
import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppCard as AppCardDeprecated } from "@/shared/ui/deprecated/AppCard";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppStarRating } from "@/shared/ui/deprecated/AppStarRating";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { classNames } from "@/shared/utils/classNames";
import type { AppCardProps } from "@/shared/ui/deprecated/AppCard";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

interface RatingCardProps extends AppCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasRatingTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startCount: number) => void;
  onAccept?: (startCount: number, feedback?: string) => void;
  selectedRating?: number;
}

export const RatingCard = memo(
  ({
    className,
    title = ``,
    feedbackTitle = ``,
    hasRatingTitle = ``,
    hasFeedback,
    onAccept,
    onCancel,
    selectedRating = 0,
    ...other
  }: RatingCardProps) => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(selectedRating);
    const [feedback, setFeedback] = useState(``);

    const onSelectRating = useCallback(
      (rating: number) => {
        setStarsCount(rating);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(rating);
        }
      },
      [hasFeedback, onAccept],
    );

    const submitHandler = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const feedbackForm = (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <>
            <AppText title={feedbackTitle} />
            <AppInput
              value={feedback}
              onChange={setFeedback}
              placeholder={t(`YourRating`)}
            />
          </>
        }
        off={
          <>
            <AppTextDeprecated title={feedbackTitle} />
            <AppInputDeprecated
              value={feedback}
              onChange={setFeedback}
              placeholder={t(`YourRating`)}
            />
          </>
        }
      />
    );

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard
            border={`borderRound`}
            {...other}
            p={`p24`}
            max
            className={classNames(``, {}, [className])}
          >
            <AppVStack max gap={`16`} align={`center`}>
              <AppText title={starsCount ? hasRatingTitle : title} />
              <AppStarRating
                size={40}
                onRate={onSelectRating}
                selectedRating={selectedRating}
              />
            </AppVStack>
            <BrowserView>
              <AppModal isOpen={isModalOpen} onClose={cancelHandler} lazy>
                <AppVStack gap={`32`} max>
                  {feedbackForm}
                  <AppHStack gap={`16`} max justifyContent={`end`}>
                    <AppButton onClick={cancelHandler}>{t(`Cancel`)}</AppButton>
                    <AppButton variant={`outline`} onClick={submitHandler}>
                      {t(`Submit`)}
                    </AppButton>
                  </AppHStack>
                </AppVStack>
              </AppModal>
            </BrowserView>
            <MobileView>
              <AppDrawer isOpen={isModalOpen} onClose={cancelHandler}>
                <AppVStack gap={`32`} max>
                  {feedbackForm}
                  <AppButton
                    fullWidth
                    variant={`outline`}
                    onClick={submitHandler}
                  >
                    {t(`Submit`)}
                  </AppButton>
                </AppVStack>
              </AppDrawer>
            </MobileView>
          </AppCard>
        }
        off={
          <AppCardDeprecated
            {...other}
            max
            className={classNames(``, {}, [className])}
          >
            <AppVStack max gap={`16`} align={`center`}>
              <AppTextDeprecated title={starsCount ? hasRatingTitle : title} />
              <AppStarRating
                size={40}
                onRate={onSelectRating}
                selectedRating={selectedRating}
              />
            </AppVStack>
            <BrowserView>
              <AppModal isOpen={isModalOpen} onClose={cancelHandler} lazy>
                <AppVStack gap={`32`} max>
                  {feedbackForm}
                  <AppHStack gap={`16`} max justifyContent={`end`}>
                    <AppButtonDeprecated
                      theme={AppButtonTheme.OUTLINE_RED}
                      onClick={cancelHandler}
                    >
                      {t(`Cancel`)}
                    </AppButtonDeprecated>
                    <AppButtonDeprecated
                      theme={AppButtonTheme.OUTLINE}
                      onClick={submitHandler}
                    >
                      {t(`Submit`)}
                    </AppButtonDeprecated>
                  </AppHStack>
                </AppVStack>
              </AppModal>
            </BrowserView>
            <MobileView>
              <AppDrawer isOpen={isModalOpen} onClose={cancelHandler}>
                <AppVStack gap={`32`} max>
                  {feedbackForm}
                  <AppButtonDeprecated
                    fullWidth
                    theme={AppButtonTheme.OUTLINE}
                    onClick={submitHandler}
                  >
                    {t(`Submit`)}
                  </AppButtonDeprecated>
                </AppVStack>
              </AppDrawer>
            </MobileView>
          </AppCardDeprecated>
        }
      />
    );
  },
);

RatingCard.displayName = `RatingCard`;
