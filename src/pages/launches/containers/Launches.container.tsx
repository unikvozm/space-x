import * as React from 'react'
import { Container } from 'Src/lib/components/Decorators/Container.decorator'
import { ILaunch } from '../models/Launch.model'
import { launchesActions } from '../actions'
import { launchesSelector } from '../selectors/launches.selectors'
import { LaunchesCards } from '../components/LaunchesCards.component'

interface ComponentProps {
	getLaunches: () => void
	launches: ILaunch[]
}
@Container({
	actions: {
		getLaunches: launchesActions.getLaunches,
	},
	selectors: {
		launches: launchesSelector.getLaunches,
	},
})
export class LaunchesContainer extends React.PureComponent<ComponentProps> {
	public componentDidMount() {
		const { getLaunches, launches } = this.props
		if (!launches.length) getLaunches()
	}

	public render() {
		const { launches } = this.props
		return (
			<main>
				<h1>SpeceX Launches</h1>
				{launches.length ? <LaunchesCards data={launches} /> : <p>There is no data</p>}
			</main>
		)
	}
}
