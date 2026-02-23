import { ProfileCard } from "./ProfileCard";
import { testDefaultProfile } from "../../model/testData/profile";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    data: testDefaultProfile,
  },
};

export const WithLoadingError: Story = {
  args: {
    loadingError: "ProfileLoadingError",
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const Redesigned: Story = {
  args: {
    data: testDefaultProfile,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const WithLoadingErrorRedesigned: Story = {
  args: {
    loadingError: "ProfileLoadingError",
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const IsLoadingRedesigned: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
