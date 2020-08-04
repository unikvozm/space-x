import { all } from 'redux-saga/effects'

import { sagas as test } from 'Pages/test'

export const sagas = function* sagas(): any {
	yield all([...test])
}
