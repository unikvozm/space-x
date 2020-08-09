import { all } from 'redux-saga/effects'

import { sagas as history } from 'Pages/history'
import { sagas as launches } from 'Pages/launches'

export const sagas = function* sagas(): any {
	yield all([...history, ...launches])
}
