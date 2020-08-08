import { combineReducers } from 'redux'
import { LaunchesReducer as launches, LaunchesState } from './launches.reducer'

export const reducers = combineReducers({
	launches,
})

export type State = {
	launches: LaunchesState
}
