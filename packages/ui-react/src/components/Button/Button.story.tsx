import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
};

export default meta;

export const Primary = {
	args: {
		background: 'red',
      children: 'Click me'
	},
} satisfies StoryObj<typeof Button>;
