import type { Meta, StoryObj } from "@storybook/preact";
import { fn } from "@storybook/test";
import Comopnent from ".";

const meta = {
  title: "Inputs/TextButton",
  component: Comopnent,
  tags: ["autodocs"],
  args: {
    onClick: fn()
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "👆 Click me",
  },
};

export const Danger: Story = {
  args: {
    children: "💀 Don't click me",
    danger: true,
  },
};
