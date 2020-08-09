import * as React from 'react'
import { Container } from 'Src/lib/components/Decorators/Container.decorator'
import { FilterParams } from 'Src/common/models'
import { Input, Button, OrbitSelect } from 'Src/lib/components'
import { ILaunch } from '../models/Launch.model'
import { launchesActions } from '../actions'
import { launchesSelector } from '../selectors/launches.selectors'
import { LaunchesCards } from '../components/LaunchesCards.component'

interface ComponentProps {
	getLaunches: () => void
	launches: ILaunch[]
	setFilters: (params: FilterParams) => void
	filteredLaunches: ILaunch[]
}

interface ComponentState {
	filters: {
		name: string
		date_from: string
		date_to: string
		rockets: string
	}
}

const initialState = {
	filters: {
		name: '',
		date_from: '',
		date_to: '',
		rockets: '',
	},
}

@Container({
	actions: {
		getLaunches: launchesActions.getLaunches,
		setFilters: launchesActions.setFilterParams,
	},
	selectors: {
		launches: launchesSelector.getLaunches,
		filteredLaunches: launchesSelector.getFilteredLaunches,
	},
})
export class LaunchesContainer extends React.PureComponent<ComponentProps, ComponentState> {
	public constructor(props: ComponentProps) {
		super(props)
		this.state = initialState
	}

	public componentDidMount() {
		const { getLaunches, launches } = this.props
		if (!launches.length) getLaunches()
	}

	private onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		const { filters } = this.state
		this.setState({ filters: { ...filters, name: value } })
	}

	private onOrbitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		const { filters } = this.state
		this.setState({ filters: { ...filters, rockets: value } })
	}

	private onDateFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		const { filters } = this.state
		this.setState({ filters: { ...filters, date_from: value } })
	}

	private onDateToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		const { filters } = this.state
		this.setState({ filters: { ...filters, date_to: value } })
	}

	private searchHandler = (e: any): void => {
		e.preventDefault()
		const { filters } = this.state
		const { setFilters } = this.props
		setFilters(filters)
	}

	private clearForm = (): void => {
		const { setFilters } = this.props
		this.setState(initialState)
		setFilters(initialState.filters)
	}

	public render() {
		const { filteredLaunches } = this.props
		const {
			filters: { name, date_to, date_from, rockets },
		} = this.state
		return (
			<main>
				<h1>SpeceX Launches</h1>
				<form onSubmit={this.searchHandler}>
					<Input id="name" onChange={this.onNameChange} value={name} type="text" label="Name: " />
					<Input
						id="date_from"
						onChange={this.onDateFromChange}
						value={date_from}
						type="date"
						label="Date from: "
					/>
					<Input
						id="date_to"
						onChange={this.onDateToChange}
						value={date_to}
						type="date"
						label="Date to: "
					/>
					<OrbitSelect onChange={this.onOrbitChange} value={rockets} />
					<Button type="submit" title="Find" className="active" />
					<Button type="button" title="Clear" onClick={this.clearForm} />
				</form>

				{filteredLaunches.length ? (
					<LaunchesCards data={filteredLaunches} />
				) : (
					<p>There is no data</p>
				)}
			</main>
		)
	}
}
