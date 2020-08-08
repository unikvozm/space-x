import { call, put, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { historyApi } from '../api'
import { historyActions } from '../actions'

export function* getHistory(): SagaIterator {
	try {
		const history = yield call(historyApi.getAllHistory)
		yield put(historyActions.setHistory(history))
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)
		// eslint-disable-next-line no-alert
		alert('An error occurs while getting history')
	}
}

export const saga = function* saga(): SagaIterator {
	yield takeEvery(ActionTypes.GET_HISTORY, getHistory)
}
