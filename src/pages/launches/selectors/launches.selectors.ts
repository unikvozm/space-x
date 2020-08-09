import { createSelector } from 'reselect'
import { IStore } from 'Src/store/IStore.interface'
import { DateToUnix } from 'Src/utils/date'
import { FilterParams } from 'Src/common/models'
import { ILaunch } from '../models/Launch.model'

const getLaunches = (state: IStore): ILaunch[] => state.launches.launches.launches

const getFilters = (state: IStore): FilterParams => state.launches.launches.filterParams

const getFilteredLaunches = createSelector([getFilters, getLaunches], (params, launches) => {
	return launches.filter(
		(launch) =>
			launch.mission_name.toLocaleLowerCase().includes(params.name?.toLowerCase() || '') &&
			launch.launch_date_unix <=
				(params.date_to ? DateToUnix(params.date_to) : Number.MAX_SAFE_INTEGER) &&
			launch.launch_date_unix >= (params.date_from ? DateToUnix(params.date_from) : 0)
	)
})

export const launchesSelector = {
	getLaunches,
	getFilters,
	getFilteredLaunches,
}
