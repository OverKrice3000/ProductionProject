import "@/app/styles/index.scss";
import { setFeatureFlags } from "../../../utils/features";

import type { FeatureFlags } from "../../../types/featureFlags";
import type { StoryContext, StoryFn } from "@storybook/react";

export const StyleDecorator = (
  StoryComponent: StoryFn,
  context: StoryContext,
) => {
  const featureFlags: FeatureFlags = context.parameters.featureFlags ?? {};
  setFeatureFlags(featureFlags);

  return (
    <div
      id="app-wrapper"
      className={
        featureFlags.isAppRedesigned ? `app-wrapper-redesigned` : `app-wrapper`
      }
    >
      <StoryComponent />
    </div>
  );
};
