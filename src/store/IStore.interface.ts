import { HistoryState } from 'Src/pages/history/reducers/history.reducer'
import { LaunchesState } from 'Src/pages/launches/reducers/launches.reducer'

export interface IStore {
	history: {
		history: HistoryState
	}
	launches: {
		launches: LaunchesState
	}
}
