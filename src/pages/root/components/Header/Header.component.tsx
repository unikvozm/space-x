import * as React from 'react'
import { Link } from 'react-router-dom'
import { FrontUrls } from 'Src/constants/FrontUrls'

export const Header = (): JSX.Element => (
	<div>
		<nav>
			<Link to={FrontUrls.home}>Home</Link>
			<Link to={FrontUrls.history}>History</Link>
			<Link to={FrontUrls.launches}>Launches</Link>
		</nav>
	</div>
)
