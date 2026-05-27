import type { Meta, StoryObj } from "@storybook/react-vite";

import CareerItem from "./CareerItem";

const meta = {
  args: {
    children:
      "Led development of multiple customer-facing features, collaborating closely with design and product teams to ship high-quality experiences.",
    company: "Acme Corp",
    endDate: "2024",
    role: "Senior Frontend Engineer",
    startDate: "2021",
  },
  component: CareerItem,
} satisfies Meta<typeof CareerItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDates: Story = {
  args: {
    company: undefined,
    endDate: undefined,
    startDate: undefined,
  },
};
