import cls from "./AppAvatar.module.scss";
import { classNames } from "shared/utils/classNames";
import type { ImgHTMLAttributes } from "react";
import { memo } from "react";

interface AppAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const AppAvatar = memo(({ className, src, size, alt, ...other }: AppAvatarProps) => {
  return (
    <img
      {...other}
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className={classNames(cls.AppAvatar, {}, [className])}
    />
  );
});

AppAvatar.displayName = `AppAvatar`;
