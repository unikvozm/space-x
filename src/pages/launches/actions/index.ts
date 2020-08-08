import { BaseAction } from 'Src/common/models/Action.model'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { ILaunch } from '../models/Launch.model'

export const getLaunches = (): BaseAction => ({
	type: ActionTypes.GET_LAUNCHES,
})

export const setLaunches = (launches: ILaunch[]): BaseAction => ({
	type: ActionTypes.SET_LAUNCHES,
	payload: launches,
})

export const launchesActions = {
	getLaunches,
	setLaunches,
}
