import axios from 'axios'
import { FetchedUrls } from 'Src/constants/FetchedUrls'

async function getAllHistory(): Promise<any> {
	const res = await axios.get(FetchedUrls.history)
	return res.data
}

export const historyApi = {
	getAllHistory,
}
