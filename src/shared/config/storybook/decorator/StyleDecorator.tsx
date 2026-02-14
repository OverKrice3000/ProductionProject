import "@/app/styles/index.scss";
import type { StoryFn } from "@storybook/react";

export const StyleDecorator = (StoryComponent: StoryFn) => (
  <div id="app-wrapper" className="app-wrapper">
    <StoryComponent />
  </div>
);
