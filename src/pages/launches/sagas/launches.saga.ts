import { call, put, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { ActionTypes } from 'Src/constants/ActionType.constants'
import { convertFetchedLaunchToILaunch } from 'Src/utils/dataConvertation'
import { launchesApi } from '../api'
import { launchesActions } from '../actions'

export function* getLaunches(): SagaIterator {
	try {
		const launches = yield call(launchesApi.getAllLaunches)
		yield put(launchesActions.setLaunches(convertFetchedLaunchToILaunch(launches)))
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)
		// eslint-disable-next-line no-alert
		alert('An error occurs while getting launches')
	}
}

export const saga = function* saga(): SagaIterator {
	yield takeEvery(ActionTypes.GET_LAUNCHES, getLaunches)
}
