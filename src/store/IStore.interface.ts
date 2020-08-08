import { HistoryState } from 'Src/pages/history/reducers/history.reducer'

export interface IStore {
	history: {
		history: HistoryState
	}
}
