import { memo, useMemo, useState } from "react";

import { AppIcon } from "../../../redesigned/AppIcon";
import { toggleFeatures, ToggleFeatures } from "../../../../utils/featureFlags";
import cls from "./AppStarRating.module.scss";
import { classNames } from "../../../../utils/classNames";
import { defaultStarsCount } from "../lib/constants/constants";
import { getRatingsArray } from "../lib/utils/getRatingsArray";
import {
  AppIcon as AppIconDeprecated,
  AppIconColor,
} from "../../AppIcon/AppIcon";
import StarIcon from "../../../../assets/icons/star.svg";

interface AppStarRatingProps {
  className?: string;
  starsCount?: number;
  selectedRating?: number;
  size?: number;
  onRate: (rating: number) => void;
}

/**
 * @deprecated
 */
export const AppStarRating = memo(
  ({
    className,
    starsCount = defaultStarsCount,
    size = 30,
    selectedRating = 0,
    onRate,
  }: AppStarRatingProps) => {
    const ratingsArray = useMemo(() => {
      return getRatingsArray(starsCount);
    }, [starsCount]);

    const [currentStartCount, setCurrentStartCount] = useState(selectedRating);
    const [isSelected, setIsSelected] = useState(!!selectedRating);

    const onMouseEnter = (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStartCount(starsCount);
      }
    };

    const onMouseLeave = () => () => {
      if (!isSelected) {
        setCurrentStartCount(selectedRating);
      }
    };

    const onRateHandler = (rating: number) => () => {
      if (!isSelected) {
        onRate(rating);
        setCurrentStartCount(rating);
        setIsSelected(true);
      }
    };

    return (
      <div
        className={classNames(
          toggleFeatures({
            name: `isAppRedesigned`,
            on: () => cls.StarRatingRedesigned,
            off: () => cls.StarRating,
          }),
          {},
          [className],
        )}
        aria-label={`${currentStartCount} start of ${starsCount}`}
      >
        {ratingsArray.map((rating) => (
          <ToggleFeatures
            key={rating}
            name={`isAppRedesigned`}
            on={
              <AppIcon
                role="button"
                className={classNames(
                  cls.starIcon,
                  {
                    [cls.selected]: isSelected,
                  },
                  [],
                )}
                color={currentStartCount < rating ? `none` : `accent`}
                width={size}
                height={size}
                Svg={StarIcon}
                clickable
                onClick={onRateHandler(rating)}
                onMouseEnter={onMouseEnter(rating)}
                onMouseLeave={onMouseLeave()}
              />
            }
            off={
              <AppIconDeprecated
                role="button"
                className={classNames(
                  cls.starIcon,
                  {
                    [cls.hovered]: currentStartCount >= rating,
                    [cls.selected]: isSelected,
                  },
                  [],
                )}
                color={AppIconColor.NONE}
                width={size}
                height={size}
                Svg={StarIcon}
                onClick={onRateHandler(rating)}
                onMouseEnter={onMouseEnter(rating)}
                onMouseLeave={onMouseLeave()}
              />
            }
          />
        ))}
      </div>
    );
  },
);

AppStarRating.displayName = `AppStarRating`;
