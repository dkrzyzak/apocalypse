import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonPalette, ButtonVariant } from './constants';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
};

export default meta;

export function Primary() {
	return (
		<div className='flex gap-2'>
			<Button color='primary' variant='fill'>Click me</Button>
			<Button color='primary' variant='light'>Click me</Button>
			<Button color='primary' variant='outline'>Click me</Button>
		</div>
	)
}

export const FullWidth = {
	args: {
		children: 'Click me',
		variant: 'fill',
		fullWidth: true,
	},
} satisfies Story;



export function Sizes({
	color,
	variant,
}: {
	color: ButtonPalette;
	variant: ButtonVariant;
}) {
	return (
		<>
			<div className='flex gap-4'>
				<Button color={color} variant={variant} size='xs'>Button xs</Button>
				<Button color={color} variant={variant} size='sm'>Button sm</Button>
				<Button color={color} variant={variant} size='md'>Button md</Button>
				<Button color={color} variant={variant} size='lg'>Button lg</Button>
				<Button color={color} variant={variant} size='xl'>Button xl</Button>
			</div>
		</>
	);
}
