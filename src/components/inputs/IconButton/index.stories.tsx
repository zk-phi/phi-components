import type { Meta, StoryObj } from "@storybook/preact";
import { fn } from "@storybook/test";
import Comopnent from "./component";

const meta = {
  title: "Stories/IconButton",
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
    children: "＋",
  },
};

/**
 * You may mark some buttons as `danger`-ous,
 * to make them look different from others.
 *
 * If you are using CSS-only installation, add `danger` class to buttons:
 *
 * ```html
 * <button class="phi-icon-button danger">
 *   ＋
 * </button>
 * ```
 */
export const Danger: Story = {
  args: {
    children: "＋",
    danger: true,
  },
};
