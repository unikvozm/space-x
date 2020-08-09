import axios from 'axios'
import { FetchedUrls } from 'Src/constants/FetchedUrls'
import { IFetchedLaunch } from '../models/Launch.model'
import { IFetchedRocket } from '../models/Rocket.model'

async function getAllLaunches(): Promise<IFetchedLaunch[]> {
	const res = await axios.get(FetchedUrls.launches.launches)
	return res.data
}

async function getAllRockets(): Promise<IFetchedRocket[]> {
	const res = await axios.get(FetchedUrls.launches.rockets)
	return res.data
}

async function getLaunch(id: number): Promise<IFetchedLaunch[]> {
	const res = await axios.get(FetchedUrls.launches.launch.replace(':id', id.toString()))
	return res.data
}

export const launchesApi = {
	getAllLaunches,
	getAllRockets,
	getLaunch,
}
