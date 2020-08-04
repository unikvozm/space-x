import { call, put, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { generateNewNumber } from '../api'
import { numberActions } from '../actions/numbers.action'

export function* getNumber(): SagaIterator {
	try {
		const num = yield call(generateNewNumber)
		yield put(numberActions.setNumber(num))
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)
		// eslint-disable-next-line no-alert
		alert('An error occurs while getting a number')
	}
}

export const saga = function* saga(): SagaIterator {
	yield takeEvery(ActionTypes.GET_NUMBER, getNumber)
}
