import * as React from 'react'

interface Props {
	onRequestNewNumber: () => void
}

export const NumberSetterComponent: React.FunctionComponent<Props> = ({
	onRequestNewNumber,
}: Props) => (
	<button type="button" onClick={onRequestNewNumber}>
		Request new number
	</button>
)
