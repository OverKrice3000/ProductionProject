import { memo, useMemo, useState } from "react";

import cls from "./AppStarRating.module.scss";
import { classNames } from "../../../utils/classNames";
import { defaultStarsCount } from "../lib/constants/constants";
import { getRatingsArray } from "../lib/utils/getRatingsArray";
import { AppIcon, AppIconColor } from "../../AppIcon/AppIcon";
import StarIcon from "../../../assets/icons/star.svg";

interface AppStarRatingProps {
  className?: string;
  starsCount?: number;
  selectedRating?: number;
  size?: number;
  onRate: (rating: number) => void;
}

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
      <div className={classNames(``, {}, [className])}>
        {ratingsArray.map((rating) => (
          <AppIcon
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
            key={rating}
            Svg={StarIcon}
            onClick={onRateHandler(rating)}
            onMouseEnter={onMouseEnter(rating)}
            onMouseLeave={onMouseLeave()}
          />
        ))}
      </div>
    );
  },
);

AppStarRating.displayName = `AppStarRating`;
