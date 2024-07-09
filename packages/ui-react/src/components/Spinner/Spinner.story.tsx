import { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = {
	title: 'UI/Spinner',
	component: Spinner,
};

export default meta;

export const Default = {
	args: {
		colorClassName: 'fill-warn-500',
	},
} satisfies Story;
