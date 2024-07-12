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
	clickTransition?: boolean;
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

const outlineBaseStyles = 'hover:bg-white/[5%] '; // IMPORTANT: don't remove the space at the end

export const buttonColorStyles: Record<ButtonPalette, Record<ButtonVariant, string>> = {
	primary: {
		fill: 'bg-blue-600 text-white hover:bg-blue-700',
		light: 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30',
		outline: outlineBaseStyles + 'border-blue-400 text-blue-400',
	},
	secondary: {
		fill: 'bg-pink-600 text-white hover:bg-pink-700',
		light: 'bg-pink-500/20 text-pink-300 hover:bg-pink-500/30',
		outline: outlineBaseStyles + 'border-pink-400 text-pink-400',
	},
	neutral: {
		fill: 'bg-slate-300 text-black hover:bg-slate-200',
		light: 'bg-slate-500 text-slate-200 hover:bg-slate-500/80',
		outline: outlineBaseStyles + 'border-neutral-200 text-neutral-100',
	},
	success: {
		fill: 'bg-green-600 text-white hover:bg-green-700',
		light: 'bg-green-500/20 text-green-300 hover:bg-green-500/30',
		outline: outlineBaseStyles + 'border-green-400 text-green-400',
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
		fill: 'bg-red-600 text-white hover:bg-red-700',
		light: 'bg-red-500/20 text-red-300 hover:bg-red-500/30',
		outline: outlineBaseStyles + 'border-red-500 text-red-500',
	},
};
