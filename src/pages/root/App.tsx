import * as React from 'react'
import './styles/App.scss'

interface OwnProps {
	name: string
}

export class App extends React.PureComponent<OwnProps> {
	public render(): JSX.Element {
		const { name } = this.props
		return (
			<div className="app">
				<h1 className="header">Hello {name}</h1>
				<img src="..//assets/images/logo.png" alt="logo" />
			</div>
		)
	}
}
