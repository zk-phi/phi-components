import type { Meta, StoryObj } from "@storybook/preact";
import { fn } from "@storybook/test";
import Comopnent from ".";

const meta = {
  title: "Stories/Button",
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
    children: "Cheers!",
    icon: "🍺",
  },
};

/**
 * `primary` variant is suitable for most significant buttons in the screen,
 * which usually update resources, trigger heavy computation, etc.
 */
export const Primary: Story = {
  args: {
    children: "Save",
    icon: "💾",
    variant: "primary",
  },
};

/**
 * `dotted` variant is suitable for kinda "add" buttons,
 * that are usually replaced with the added resource when pressed.
 */
export const Dotted: Story = {
  args: {
    children: "Add New",
    variant: "dotted",
    icon: "＋",
  },
};

/**
 * You may mark some buttons as `danger`-ous,
 * to make them look different from others.
 *
 * If you are using CSS-only installation, add `danger` class to buttons:
 *
 * ```html
 * <button class="phi-button primary danger">
 *   <span class="icon">🗑️</span>
 *   Trash
 * </button>
 * ```
 */
export const Danger: Story = {
  args: {
    children: "Trash",
    variant: "primary",
    danger: true,
    icon: "🗑️",
  },
};
