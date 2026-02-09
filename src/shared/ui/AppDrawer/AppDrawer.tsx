import cls from "./AppDrawer.module.scss";
import { classNames } from '../../utils/classNames';
import type { ReactNode } from "react";
import { useEffect, useCallback, memo } from "react";
import { AppPortal } from '../AppPortal/AppPortal';
import { AppOverlay } from '../AppOverlay/AppOverlay';
import { AnimationProvider, useAnimationModules } from '../../utils/components/AnimationProvider';

interface AppDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const height = window.innerHeight - 100;

const AppDrawerContent = memo(({ className, children, isOpen, onClose }: AppDrawerProps) => {
  const { Spring, Gesture } = useAnimationModules();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    });

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? `block` : `none`));

  return (
        <AppPortal>
          <div className={classNames(cls.AppDrawer, { [cls.opened]: isOpen }, [className])}>
            <AppOverlay onClick={close} />
            <Spring.a.div
                className={cls.sheet}
                style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                {...bind()}
            >
              {children}
            </Spring.a.div>
          </div>
        </AppPortal>
  );
});
AppDrawerContent.displayName = `AppDrawerContent`;

const AnimationLoader = memo((props: AppDrawerProps) => {
  const { isLoaded } = useAnimationModules();

  if (!isLoaded) {
    return null;
  }

  return <AppDrawerContent {...props} />;
});

AnimationLoader.displayName = `AnimationLoader`;

export const AppDrawer = memo((props: AppDrawerProps) => {
  return <AnimationProvider>
    <AnimationLoader {...props} />
  </AnimationProvider>;
});

AppDrawer.displayName = `AppDrawer`;
