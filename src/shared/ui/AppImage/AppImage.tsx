import { memo, useLayoutEffect, useState } from "react";

import { classNames } from '../../utils/classNames';

import type { ImgHTMLAttributes, ReactElement } from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo(({ className, src, fallback, errorFallback, ...other }: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? ``;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
      <img {...other} src={src} className={classNames(``, {}, [className])} />
  );
});

AppImage.displayName = `AppImage`;
