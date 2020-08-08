import { combineReducers } from 'redux'
import { HistoryReducer as history, HistoryState } from './history.reducer'

export const reducers = combineReducers({
	history,
})

export type State = {
	history: HistoryState
}
