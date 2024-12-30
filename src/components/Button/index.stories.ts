import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn()
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン",
    icon: "〓",
  },
};

export const Primary: Story = {
  args: {
    children: "ボタン",
    variant: "primary",
    icon: "〓",
  },
};

export const Dotted: Story = {
  args: {
    children: "ボタン",
    variant: "dotted",
    icon: "〓",
  },
};

export const Text: Story = {
  args: {
    children: "ボタン",
    variant: "text",
    icon: "〓",
  },
};

export const Icon: Story = {
  args: {
    children: "〓",
    variant: "icon",
  },
};

export const Danger: Story = {
  args: {
    children: "ボタン",
    variant: "primary",
    danger: true,
    icon: "〓",
  },
};
