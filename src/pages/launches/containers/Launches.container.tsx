import * as React from 'react'
import { Container } from 'Src/lib/components/Decorators/Container.decorator'
import { FilterParams } from 'Src/common/models'
import { ILaunch } from '../models/Launch.model'
import { launchesActions } from '../actions'
import { launchesSelector } from '../selectors/launches.selectors'
import { LaunchesCards } from '../components/LaunchesCards.component'
import { LaunchesForm } from '../components/LaunchesForm.component'

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

	private onFilterChange = (fieldName: string) => (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = e.target
		const { filters } = this.state
		this.setState({ filters: { ...filters, [fieldName]: value } })
	}

	private searchHandler = (e: React.FormEvent<HTMLElement>): void => {
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
		const { filters } = this.state
		return (
			<main>
				<h1>SpeceX Launches</h1>
				<LaunchesForm
					onFilterChange={this.onFilterChange}
					filtersValue={filters}
					clearForm={this.clearForm}
					submitForm={this.searchHandler}
				/>

				{filteredLaunches.length ? (
					<LaunchesCards data={filteredLaunches} />
				) : (
					<p>There is no data</p>
				)}
			</main>
		)
	}
}
