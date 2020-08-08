import { IStore } from 'Src/store/IStore.interface'
import { IHistory } from '../models/History.model'

const getHistory = (state: IStore): IHistory[] => state.history.history

export const historySelector = {
	getHistory,
}
