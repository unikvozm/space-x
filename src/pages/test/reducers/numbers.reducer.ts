import { ActionTypes } from 'Src/constants/ActionType.constants'
import { BaseAction } from 'Src/common/models/Action.model'

export type NumberCollectionState = number[]

export const NumberCollectionReducer = (state: NumberCollectionState = [0], action: BaseAction) => {
	switch (action.type) {
		case ActionTypes.SET_NUMBER:
			return [...state, action.payload]
		default:
			return state
	}
}
