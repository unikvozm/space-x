import { combineReducers } from 'redux'
import { NumberCollectionReducer as numbers, NumberCollectionState } from './numbers.reducer'

export const reducers = combineReducers({
	numbers,
})

export type State = {
	numbers: NumberCollectionState
}
