import axios from 'axios'
import { FetchedUrls } from 'Src/constants/FetchedUrls'
import { ILaunch } from '../models/Launch.model'

async function getAllLaunches(): Promise<ILaunch[]> {
	const res = await axios.get(FetchedUrls.launches)
	return res.data
}

export const launchesApi = {
	getAllLaunches,
}
