import type { Meta, StoryObj } from "@storybook/react-vite";

import Carousel from "./Carousel";
import Testimonial from "./Testimonial";

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel>
      <Testimonial
        name="Jane Doe"
        quote="Johannes is an exceptional designer and developer who consistently delivers high-quality, thoughtful work."
        role="Product Manager"
      />
      <Testimonial
        name="John Smith"
        quote="Working with Johannes was a pleasure. His attention to detail and technical depth made every project a success."
        role="Engineering Lead"
      />
      <Testimonial
        name="Maria Garcia"
        quote="Johannes brings both strong design sensibility and engineering expertise — a rare and valuable combination."
        role="UX Designer"
      />
    </Carousel>
  ),
};
