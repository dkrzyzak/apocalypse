'use client';
import Spinner from '../Spinner/Spinner';
import {
	buttonColorStyles,
	buttonDisabledStyles,
	buttonLoadingStyles,
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
	onClick,
}: ButtonProps) {
	return (
		<button
			disabled={isDisabled}
			aria-disabled={isDisabled}
			className={twMerge(
				'rounded-md duration-200 transition-ct flex justify-center items-center relative',
				fullWidth && 'w-full active:scale-[99%]',
				!fullWidth && 'active:scale-105',
				isLoading && buttonLoadingStyles,
				isDisabled && buttonDisabledStyles,
				buttonSizeStyles[size],
				buttonColorStyles[color][variant]
			)}
			onClick={isDisabled || isLoading ? undefined : onClick}
		>
			<>
				{isLoading && <Spinner className='absolute animate-rollDown' />}
				<span
					className={twMerge(
						'inline-flex items-center gap-2 transition-ot',
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
