import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Comopnent from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Inputs/Button',
  component: Comopnent,
  tags: ['autodocs'],
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

export const Primary: Story = {
  args: {
    children: "Save",
    icon: "💾",
    variant: "primary",
  },
};

export const Dotted: Story = {
  args: {
    children: "Add New",
    variant: "dotted",
    icon: "＋",
  },
};

export const Danger: Story = {
  args: {
    children: "Trash",
    variant: "primary",
    danger: true,
    icon: "🗑️",
  },
};
