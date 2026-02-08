import cls from "./AppStarRating.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo, useMemo, useState } from "react";
import { defaultStarsCount } from "@/shared/ui/appStarRating/lib/constants/constants";
import { getRatingsArray } from "@/shared/ui/appStarRating/lib/utils/getRatingsArray";
import { AppIcon, AppIconColor } from "@/shared/ui/appIcon/AppIcon";
import StarIcon from "@/shared/assets/icons/star.svg";

interface AppStarRatingProps {
  className?: string;
  starsCount?: number;
  selectedRating?: number;
  size?: number;
  onRate: (rating: number) => void;
}

export const AppStarRating = memo(({ className, starsCount = defaultStarsCount, size = 30, selectedRating = 0, onRate }: AppStarRatingProps) => {
  const ratingsArray = useMemo(() => {
    return getRatingsArray(starsCount);
  }, [starsCount]);

  const [currentStartCount, setCurrentStartCount] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

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
          {ratingsArray.map((rating) => <AppIcon
              className={classNames(cls.starIcon, { [cls.hovered]: currentStartCount >= rating, [cls.selected]: isSelected }, [])}
              color={AppIconColor.NONE}
              width={size}
              height={size}
              key={rating}
              Svg={StarIcon}
              onClick={onRateHandler(rating)}
              onMouseEnter={onMouseEnter(rating)}
              onMouseLeave={onMouseLeave()}
          />)}
        </div>
  );
});

AppStarRating.displayName = `AppStarRating`;
