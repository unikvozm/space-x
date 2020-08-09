import { ActionTypes } from 'Src/constants/ActionType.constants'
import { BaseAction, FilterParams } from 'Src/common/models'
import { ILaunch } from '../models/Launch.model'

export type LaunchesState = {
	launches: ILaunch[]
	filterParams: FilterParams
}

export const InitialState: LaunchesState = {
	launches: [],
	filterParams: {},
}

export const LaunchesReducer = (state: LaunchesState = InitialState, action: BaseAction) => {
	switch (action.type) {
		case ActionTypes.SET_LAUNCHES:
			return { ...state, launches: action.payload }
		case ActionTypes.SET_FILTER_PARAMS:
			return { ...state, filterParams: action.payload }
		default:
			return state
	}
}
