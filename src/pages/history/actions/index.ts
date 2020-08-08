import { BaseAction } from 'Src/common/models/Action.model'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { IHistory } from '../models/History.model'

export const getHistory = (): BaseAction => ({
	type: ActionTypes.GET_HISTORY,
})

export const setHistory = (history: IHistory[]): BaseAction => ({
	type: ActionTypes.SET_HISTORY,
	payload: history,
})

export const historyActions = {
	getHistory,
	setHistory,
}
