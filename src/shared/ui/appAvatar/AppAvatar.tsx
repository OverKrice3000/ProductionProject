import cls from "./AppAvatar.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";

interface AppAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const AppAvatar = memo(({ className, src, size, alt }: AppAvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className={classNames(cls.AppAvatar, {}, [className])}
    />
  );
});

AppAvatar.displayName = `AppAvatar`;
