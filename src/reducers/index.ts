import { combineReducers } from 'redux'
import { reducers as test } from 'Pages/test'
import { reducers as history } from 'Pages/history'
import { reducers as launches } from 'Pages/launches'

export const rootReducers = combineReducers({
	test,
	history,
	launches,
})
