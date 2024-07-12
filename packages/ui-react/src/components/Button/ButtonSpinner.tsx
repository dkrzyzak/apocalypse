// TODO: set proper colors for each button color + variant

import { Spinner, SpinnerProps } from '../Spinner';
import { Size } from './constants';

type ButtonSpinnerProps = Pick<SpinnerProps, 'backgroundClassName' | 'colorClassName'> & {
	size: Size;
};

const sizes: Record<Size, string> = {
	xs: '1.25rem',
	sm: '1.50rem',
	md: '1.75rem',
	lg: '2rem',
	xl: '2.25rem',
};

function ButtonSpinner({
	size,
	backgroundClassName,
	colorClassName,
}: ButtonSpinnerProps) {
	return (
		<Spinner
            className='absolute animate-rollDown'
			size={sizes[size]}
			backgroundClassName={backgroundClassName}
			colorClassName={colorClassName}
		/>
	);
}

export default ButtonSpinner;
