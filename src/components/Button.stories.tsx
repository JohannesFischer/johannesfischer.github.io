import type { Meta, StoryObj } from "@storybook/react-vite";

import { Copy } from "lucide-react";

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

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const WithIconAfter: Story = {
  args: {
    children: "Copy",
    iconAfter: <Copy />,
  },
};

export const LargeWithIconAfter: Story = {
  args: {
    ...WithIconAfter.args,
    size: "lg",
  },
};
