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

	fullWidth?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

// UI CONFIG

export const buttonSizeStyles: Record<Size, string> = {
	xs: 'h-9 px-3 text-base',
	sm: 'h-10 px-4 text-xl',
	md: 'h-12 px-4 text-xl',
	lg: 'h-14 px-6 text-2xl',
	xl: 'h-16 px-6 text-3xl',
};

export const buttonDisabledStyles = 'disabled:opacity-50 disabled:cursor-default disabled:active:scale-100';

export const buttonLoadingStyles = 'cursor-progress active:scale-100';

const outlineBaseStyles = 'border-2 hover:bg-white/[5%] ';

export const buttonColorStyles: Record<ButtonPalette, Record<ButtonVariant, string>> = {
	primary: {
		fill: 'bg-blue-600 text-white hover:bg-blue-700',
		light: 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30',
		outline: outlineBaseStyles + 'border-blue-400 text-blue-400',
	},
	secondary: {
		fill: 'bg-secondary text-white',
		light: 'bg-secondary-light text-secondary',
		outline: outlineBaseStyles + 'border-secondary text-secondary',
	},
	neutral: {
		fill: 'bg-neutral text-black',
		light: 'bg-neutral-light text-neutral',
		outline: outlineBaseStyles + 'border-neutral-200 text-neutral-100',
	},
	success: {
		fill: 'bg-success text-white',
		light: 'bg-success-light text-success',
		outline: outlineBaseStyles + 'border-success text-success',
	},
	info: {
		fill: 'bg-info text-white',
		light: 'bg-info-light text-info',
		outline: outlineBaseStyles + 'border-info text-info',
	},
	warning: {
		fill: 'bg-warn-600 hover:bg-warn-700 text-white',
		light: 'bg-warn-500/15 hover:bg-warn-500/25 text-warn-400',
		outline: outlineBaseStyles + 'border-warn-600 text-warn-600',
	},
	danger: {
		fill: 'bg-danger text-white',
		light: 'bg-danger-light text-danger',
		outline: outlineBaseStyles + 'border-danger text-danger',
	},
};
