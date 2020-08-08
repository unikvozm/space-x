import { ActionTypes } from 'Src/constants/ActionType.constants'
import { BaseAction } from 'Src/common/models/Action.model'
import { ILaunch } from '../models/Launch.model'

export type LaunchesState = ILaunch[]

export const LaunchesReducer = (state: LaunchesState = [], action: BaseAction) => {
	switch (action.type) {
		case ActionTypes.SET_LAUNCHES:
			return action.payload
		default:
			return state
	}
}
