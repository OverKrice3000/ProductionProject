import {
  useContext,
  useMemo,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";

import type { ReactNode } from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

interface AnimationProviderProps {
  children?: ReactNode;
}

const getAsyncAnimationModules = async () => {
  return await Promise.all([
    import(`@react-spring/web`),
    import(`@use-gesture/react`),
  ]);
};

export const useAnimationModules = () =>
  useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const Spring = useRef<SpringType>();
  const Gesture = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([spring, gesture]) => {
      Spring.current = spring;
      Gesture.current = gesture;
      setIsLoaded(true);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      Gesture: Gesture.current,
      Spring: Spring.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};
