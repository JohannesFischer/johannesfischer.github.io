import type { Meta, StoryObj } from "@storybook/react-vite";

import { type ColorToken } from "../../styled-system/tokens";
import RotatingHeadline from "./RotatingHeadline";

const meta = {
  args: {
    interval: 2500,
    items: [
      {
        gradient: ["blue.300", "blue.500"] as [ColorToken, ColorToken],
        text: "First headline text",
      },
      {
        gradient: ["green.300", "green.500"] as [ColorToken, ColorToken],
        text: "Second headline text",
      },
      {
        gradient: ["red.300", "red.500"] as [ColorToken, ColorToken],
        text: "Third headline text",
      },
    ],
  },
  component: RotatingHeadline,
} satisfies Meta<typeof RotatingHeadline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
