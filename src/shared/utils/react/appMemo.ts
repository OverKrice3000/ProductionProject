import { memo } from "react";

import type { ComponentType } from "react";

type NamedComponent<C> = C & { displayName?: string | undefined; };

export const typedMemo = <C extends ComponentType<any>> (Component: C): NamedComponent<C> => {
  return memo(Component) as unknown as NamedComponent<C>;
};
