import { buttonColorStyles, ButtonProps, buttonSizeStyles } from './constants';
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
				'rounded-md transition-ct duration-200 flex',
				fullWidth && 'w-full active:scale-[99%]',
				!fullWidth && 'active:scale-105',
				isDisabled && 'opacity-50 cursor-default',
				buttonSizeStyles[size],
				buttonColorStyles[color][variant]
			)}
		>
			<span className='inline-flex items-center'>{children}</span>
		</button>
	);
}

export default Button;
