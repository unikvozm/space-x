import { BaseAction } from 'Src/common/models/Action.model'
import { ActionTypes } from 'Src/constants/ActionType.constants'

export const getNumber = (): BaseAction => ({
	type: ActionTypes.GET_NUMBER,
})

export const setNumber = (number: number): BaseAction => ({
	type: ActionTypes.SET_NUMBER,
	payload: number,
})

export const numberActions = {
	getNumber,
	setNumber,
}
