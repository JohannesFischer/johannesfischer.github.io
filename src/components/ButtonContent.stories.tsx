import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExternalLink } from "lucide-react";

import ButtonContent from "./ButtonContent";

const meta = {
  args: {
    children: "Button label",
  },
  component: ButtonContent,
} satisfies Meta<typeof ButtonContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIconAfter: Story = {
  args: {
    iconAfter: <ExternalLink />,
  },
};
