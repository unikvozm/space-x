import axios from 'axios'
import { FetchedUrls } from 'Src/constants/FetchedUrls'
import { IHistory } from '../models/History.model'

async function getAllHistory(): Promise<IHistory[]> {
	const res = await axios.get(FetchedUrls.history)
	return res.data
}

export const historyApi = {
	getAllHistory,
}
