import { ActionTypes } from 'Src/constants/ActionType.constants'
import { BaseAction } from 'Src/common/models/Action.model'
import { IHistory } from '../models/History.model'

export type HistoryState = IHistory[]

export const HistoryReducer = (state: HistoryState = [], action: BaseAction) => {
	switch (action.type) {
		case ActionTypes.SET_HISTORY:
			return action.payload
		default:
			return state
	}
}
