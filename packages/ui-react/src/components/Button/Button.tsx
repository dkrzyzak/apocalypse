interface ButtonProps {
	children: React.ReactNode;
	background: string;
}

function Button({ children, background }: ButtonProps) {
	return (
		<button style={{ background }} className='p-4 rounded-md bg-orange-700 text-white'>
			{children}
		</button>
	);
}

export default Button;
