import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import Header from "./Header";

const meta = {
  args: {
    onThemeChange: fn(),
  },
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
