import type { Meta, StoryObj } from "@storybook/react-vite";

import { Code } from "lucide-react";

import SkillCard from "./SkillCard";

const meta = {
  args: {
    children: "React, TypeScript, CSS",
    icon: <Code />,
    title: "Frontend",
  },
  component: SkillCard,
} satisfies Meta<typeof SkillCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
