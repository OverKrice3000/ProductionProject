import { Suspense } from "react";

import type { StoryFn } from "@storybook/react";

export const SuspenseDecorator = (StoryComponent: StoryFn) => (
  <Suspense fallback={``}>
    <StoryComponent />
  </Suspense>
);
