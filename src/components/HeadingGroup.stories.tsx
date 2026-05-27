import type { Meta, StoryObj } from "@storybook/react-vite";

import HeadingGroup from "./HeadingGroup";

const meta = {
  args: {
    heading: "My Skills",
    headingSup: "What I do",
  },
  component: HeadingGroup,
} satisfies Meta<typeof HeadingGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
