'use client';
import ButtonSpinner from './ButtonSpinner';
import {
	buttonColorStyles,
	buttonDisabledStyles,
	ButtonProps,
	buttonSizeStyles,
} from './constants';
import { twMerge } from 'tailwind-merge';

function Button({
	children,
	color = 'primary',
	variant = 'fill',
	fullWidth = false,
	isDisabled = false,
	isLoading = false,
	leftSection,
	rightSection,
	size = 'md',
	clickTransition = true,
	onClick,
}: ButtonProps) {
	return (
		<button
			disabled={isDisabled}
			aria-disabled={isDisabled}
			className={twMerge(
				'rounded-md duration-200 transition-ct flex justify-center items-center relative border-2 border-transparent shadow-lg',
				fullWidth && 'w-full',
				clickTransition && !isLoading && (fullWidth ? 'active:scale-[99%]' : 'active:scale-105'),
				isLoading && 'cursor-progress',
				isDisabled && buttonDisabledStyles,
				buttonSizeStyles[size],
				buttonColorStyles[color][variant]
			)}
			onClick={isDisabled || isLoading ? undefined : onClick}
		>
			<>
				{isLoading && <ButtonSpinner size={size} />}
				<span
					className={twMerge(
						'inline-flex items-center gap-2 duration-300 transition-ot',
						isLoading && 'opacity-0 translate-y-2'
					)}
				>
					{leftSection}
					{children}
					{rightSection}
				</span>
			</>
		</button>
	);
}

export default Button;
