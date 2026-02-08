import '@/app/styles/index.scss';
import type { StoryFn } from "@storybook/react";
import { Suspense } from "react";

export const SuspenseDecorator = (StoryComponent: StoryFn) => (
    <Suspense fallback={``}>
        <StoryComponent />
    </Suspense>
);
