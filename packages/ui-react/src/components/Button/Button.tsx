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
	loaderPlacement = 'right',
	leftSection,
	rightSection,
	size = 'md',
}: ButtonProps) {
	return (
		<button
			disabled={isDisabled}
			aria-disabled={isDisabled}
			className={twMerge(
				'rounded-md duration-200 transition-ct flex',
				fullWidth && 'w-full active:scale-[99%]',
				!fullWidth && 'active:scale-105',
				isDisabled && buttonDisabledStyles,
				buttonSizeStyles[size],
				buttonColorStyles[color][variant]
			)}
		>
			{leftSection}
			<span className='inline-flex items-center'>{children}</span>
			{rightSection}
		</button>
	);
}

export default Button;
