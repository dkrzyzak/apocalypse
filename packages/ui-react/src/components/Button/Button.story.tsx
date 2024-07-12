import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonPalette, ButtonProps } from './constants';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
};

export default meta;

export const Default = {
	args: {
		children: 'Click me',
		isDisabled: false,
		isLoading: false,
	},
} satisfies Story;

const PaletteStory = (palette: ButtonPalette) => {
	const comp = ({ ...defaultProps }: ButtonProps) => {
		return (
			<div className='flex gap-2'>
				<Button {...defaultProps} color={palette} variant='fill'>
					Click me
				</Button>
				<Button {...defaultProps} color={palette} variant='light'>
					Click me
				</Button>
				<Button {...defaultProps} color={palette} variant='outline'>
					Click me
				</Button>
			</div>
		);
	};
	comp.story = { name: `palette/${palette}` };
	return comp;
};

export const Primary = PaletteStory('primary');
export const Secondary = PaletteStory('secondary');
export const Neutral = PaletteStory('neutral');
export const Success = PaletteStory('success');
export const Warning = PaletteStory('warning');
export const Danger = PaletteStory('danger');

export const FullWidth = {
	args: {
		children: 'Click me',
		variant: 'fill',
		fullWidth: true,
	},
} satisfies Story;

export function Sizes({ ...defaultProps }: ButtonProps) {
	return (
		<div className='flex gap-4 flex-wrap'>
			<Button {...defaultProps} size='xs'>
				Button xs
			</Button>
			<Button {...defaultProps} size='sm'>
				Button sm
			</Button>
			<Button {...defaultProps} size='md'>
				Button md
			</Button>
			<Button {...defaultProps} size='lg'>
				Button lg
			</Button>
			<Button {...defaultProps} size='xl'>
				Button xl
			</Button>
		</div>
	);
}
