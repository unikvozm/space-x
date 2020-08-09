import * as React from 'react'
import './Button.scss'

interface ComponentProps {
	title: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	type: 'submit' | 'button'
	className?: string
}
export const Button: React.FC<ComponentProps> = ({
	title,
	onClick,
	type = 'button',
	className,
}: ComponentProps) => (
	// eslint-disable-next-line react/button-has-type
	<button className={`button ${className}`} type={type} onClick={onClick}>
		{title}
	</button>
)
