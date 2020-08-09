import { BaseAction, FilterParams } from 'Src/common/models'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { ILaunch } from '../models/Launch.model'
import { IOrbit } from '../models/Rocket.model'

export const getLaunches = (): BaseAction => ({
	type: ActionTypes.GET_LAUNCHES,
})

export const setLaunches = (launches: ILaunch[]): BaseAction => ({
	type: ActionTypes.SET_LAUNCHES,
	payload: launches,
})

export const getLaunch = (id: number): BaseAction => ({
	type: ActionTypes.GET_LAUNCH,
	payload: id,
})

export const setLaunch = (launch: ILaunch): BaseAction => ({
	type: ActionTypes.SET_LAUNCH,
	payload: launch,
})

export const setFilterParams = (params: FilterParams): BaseAction => ({
	type: ActionTypes.SET_FILTER_PARAMS,
	payload: params,
})

export const getRockets = (): BaseAction => ({
	type: ActionTypes.GET_ROCKETS,
})

export const setOrbits = (orbits: IOrbit[]): BaseAction => ({
	type: ActionTypes.SET_ORBITS,
	payload: orbits,
})

export const launchesActions = {
	getLaunches,
	setLaunches,
	setFilterParams,
	setOrbits,
	getRockets,
	getLaunch,
	setLaunch,
}
