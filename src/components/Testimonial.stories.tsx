import type { Meta, StoryObj } from "@storybook/react-vite";

import Testimonial from "./Testimonial";

const meta = {
  args: {
    name: "Jane Doe",
    quote:
      "Johannes is an exceptional designer and developer who consistently delivers high-quality, thoughtful work.",
    role: "Product Manager",
  },
  component: Testimonial,
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
