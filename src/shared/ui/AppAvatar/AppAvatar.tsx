import { memo } from "react";

import { AppSkeleton } from '../AppSkeleton';
import { AppIcon, AppIconColor } from '../AppIcon';
import DefaultAvatarIcon from '../../assets/icons/avatar.svg';
import { AppImage } from '../AppImage/AppImage';
import cls from "./AppAvatar.module.scss";
import { classNames } from '../../utils/classNames';

import type { ImgHTMLAttributes } from "react";

interface AppAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const AppAvatar = memo(({ className, src, size, alt, ...other }: AppAvatarProps) => {
  const fallback = <AppSkeleton width={size} height={size} borderRadius={`50%`} />;
  const errorFallback = <AppIcon color={AppIconColor.INHERIT} width={size} height={size} Svg={DefaultAvatarIcon} />;

  return (
    <AppImage
      {...other}
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className={classNames(cls.AppAvatar, {}, [className])}
    />
  );
});

AppAvatar.displayName = `AppAvatar`;
