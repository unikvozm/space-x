import { combineReducers } from 'redux'
import { reducers as test } from 'Pages/test'
import { reducers as history } from 'Pages/history'

export const rootReducers = combineReducers({
	test,
	history,
})
