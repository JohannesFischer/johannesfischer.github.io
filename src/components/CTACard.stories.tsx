import type { Meta, StoryObj } from "@storybook/react-vite";

import CTACard from "./CTACard";

const meta = {
  args: {
    children: "Action button goes here",
    description: "Supporting description for the call to action.",
    heading: "Section heading",
  },
  component: CTACard,
} satisfies Meta<typeof CTACard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
