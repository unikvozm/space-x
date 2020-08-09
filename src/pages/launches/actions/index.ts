import { BaseAction, FilterParams } from 'Src/common/models'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { ILaunch } from '../models/Launch.model'

export const getLaunches = (): BaseAction => ({
	type: ActionTypes.GET_LAUNCHES,
})

export const setLaunches = (launches: ILaunch[]): BaseAction => ({
	type: ActionTypes.SET_LAUNCHES,
	payload: launches,
})

export const setFilterParams = (params: FilterParams): BaseAction => ({
	type: ActionTypes.SET_FILTER_PARAMS,
	payload: params,
})

export const launchesActions = {
	getLaunches,
	setLaunches,
	setFilterParams,
}
