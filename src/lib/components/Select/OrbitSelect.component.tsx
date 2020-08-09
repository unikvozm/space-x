import * as React from 'react'
import { launchesActions } from 'Pages/launches/actions'
import { launchesSelector } from 'Pages/launches/selectors/launches.selectors'
import { IOrbit } from 'Pages/launches/models/Rocket.model'
import { Container } from '../../Decorators/Container.decorator'
import './Select.scss'

interface ComponentProps {
	getOrbits?: () => void
	orbits?: IOrbit[]
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
	value?: string
}

@Container({
	actions: {
		getOrbits: launchesActions.getRockets,
	},
	selectors: {
		orbits: launchesSelector.getOrbits,
	},
})
export class OrbitSelect extends React.PureComponent<ComponentProps> {
	public componentDidMount() {
		const { getOrbits, orbits = [] } = this.props
		if (!orbits.length && getOrbits) getOrbits()
	}

	public render() {
		const { orbits = [], onChange, value } = this.props
		return (
			<div className="select">
				<label htmlFor="orbits">Orbit: </label>
				<select id="orbits" name="orbit_weight" onChange={onChange} value={value}>
					<option value="">Any</option>
					{orbits.map((orbit) => (
						<option key={orbit.id} value={JSON.stringify(orbit.rockets)}>
							{orbit.name}
						</option>
					))}
				</select>
			</div>
		)
	}
}
