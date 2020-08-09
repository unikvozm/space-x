import * as React from 'react'

interface ComponentProps {
	id: string
	label?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	type: 'text' | 'date'
	value?: string
}
export const Input: React.FC<ComponentProps> = ({
	id,
	label,
	onChange,
	type,
	value,
}: ComponentProps) => (
	<div className="input">
		<label htmlFor={id}>
			<span>{label}</span>
			<input id={id} type={type} onChange={onChange} value={value} />
		</label>
	</div>
)
