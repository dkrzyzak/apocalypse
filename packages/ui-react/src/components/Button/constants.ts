import { MouseEventHandler } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'fill' | 'light' | 'outline';

export type ButtonPalette =
	| 'primary'
	| 'secondary'
	| 'neutral'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger';

export interface ButtonProps {
	children: React.ReactNode;

	size?: Size;
	color?: ButtonPalette;
	variant?: ButtonVariant;
	isDisabled?: boolean;

	leftSection?: React.ReactNode;
	rightSection?: React.ReactNode;

	isLoading?: boolean;
	loaderPlacement?: 'left' | 'right';

	fullWidth?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

// UI CONFIG

export const buttonSizeStyles: Record<Size, string> = {
	xs: 'h-10 px-2 text-base',
	sm: 'h-[2.75rem] px-2 text-xl',
	md: 'h-12 px-4 text-2xl',
	lg: 'h-14 px-5 text-2xl',
	xl: 'h-16 px-6 text-3xl',
};

export const buttonColorStyles: Record<ButtonPalette, Record<ButtonVariant, string>> = {
	primary: {
		fill: 'bg-blue-600 text-white hover:bg-blue-700',
		light: 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30',
		outline: 'border border-blue-400 text-blue-400 hover:bg-white/[5%]',
	},
	secondary: {
		fill: 'bg-secondary text-white',
		light: 'bg-secondary-light text-secondary',
		outline: 'border border-secondary text-secondary',
	},
	neutral: {
		fill: 'bg-neutral text-black',
		light: 'bg-neutral-light text-neutral',
		outline: 'border border-neutral text-neutral',
	},
	success: {
		fill: 'bg-success text-white',
		light: 'bg-success-light text-success',
		outline: 'border border-success text-success',
	},
	info: {
		fill: 'bg-info text-white',
		light: 'bg-info-light text-info',
		outline: 'border border-info text-info',
	},
	warning: {
		fill: 'bg-warning text-white',
		light: 'bg-warning-light text-warning',
		outline: 'border border-warning text-warning',
	},
	danger: {
		fill: 'bg-danger text-white',
		light: 'bg-danger-light text-danger',
		outline: 'border border-danger text-danger',
	},
};
