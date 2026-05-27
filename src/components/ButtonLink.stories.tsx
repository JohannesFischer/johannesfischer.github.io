import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExternalLink } from "lucide-react";

import ButtonLink from "./ButtonLink";

const meta = {
  args: {
    children: "Button link",
    href: "#",
    variant: "primary",
  },
  component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const LargeWithIconAfter: Story = {
  args: {
    children: "External link",
    iconAfter: <ExternalLink />,
    size: "lg",
  },
};
