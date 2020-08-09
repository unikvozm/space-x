import { createSelector } from 'reselect'
import { IStore } from 'Src/store/IStore.interface'
import { DateToUnix } from 'Src/utils/date'
import { FilterParams } from 'Src/common/models'
import { ILaunch } from '../models/Launch.model'
import { IOrbit } from '../models/Rocket.model'

const getLaunches = (state: IStore): ILaunch[] => state.launches.launches.launches

const getFilters = (state: IStore): FilterParams => state.launches.launches.filterParams

const getOrbits = (state: IStore): IOrbit[] => state.launches.launches.orbits

const getFilteredLaunches = createSelector([getFilters, getLaunches], (params, launches) => {
	return launches.filter((launch) => {
		if (!params.rockets)
			return (
				launch.mission_name.toLocaleLowerCase().includes(params.name?.toLowerCase() || '') &&
				launch.launch_date_unix <=
					(params.date_to ? DateToUnix(params.date_to) : Number.MAX_SAFE_INTEGER) &&
				launch.launch_date_unix >= (params.date_from ? DateToUnix(params.date_from) : 0)
			)
		return (
			launch.mission_name.toLocaleLowerCase().includes(params.name?.toLowerCase() || '') &&
			launch.launch_date_unix <=
				(params.date_to ? DateToUnix(params.date_to) : Number.MAX_SAFE_INTEGER) &&
			launch.launch_date_unix >= (params.date_from ? DateToUnix(params.date_from) : 0) &&
			JSON.parse(params.rockets).includes(launch.rocket_id.toLowerCase())
		)
	})
})

export const launchesSelector = {
	getLaunches,
	getFilters,
	getFilteredLaunches,
	getOrbits,
}
