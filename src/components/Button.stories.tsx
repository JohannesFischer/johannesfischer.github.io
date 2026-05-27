import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExternalLink } from "lucide-react";

import Button from "./Button";

const meta = {
  args: {
    children: "Button",
    variant: "primary",
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const LargeWithIconAfter: Story = {
  args: {
    iconAfter: <ExternalLink />,
    size: "lg",
  },
};
