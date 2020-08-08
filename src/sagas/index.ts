import { all } from 'redux-saga/effects'

import { sagas as test } from 'Pages/test'
import { sagas as history } from 'Pages/history'
import { sagas as launches } from 'Pages/launches'

export const sagas = function* sagas(): any {
	yield all([...test, ...history, ...launches])
}
