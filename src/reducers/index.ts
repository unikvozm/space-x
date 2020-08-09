import { combineReducers } from 'redux'
import { reducers as history } from 'Pages/history'
import { reducers as launches } from 'Pages/launches'

export const rootReducers = combineReducers({
	history,
	launches,
})
