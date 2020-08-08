import { IFetchedLaunch, ILaunch } from 'Src/pages/launches/models/Launch.model'
import { DateFromUTC } from './date'

export const convertFetchedLaunchToILaunch = (launches: IFetchedLaunch[]): ILaunch[] => {
	const res: ILaunch[] = []
	launches.forEach((launch: IFetchedLaunch, i: number) => {
		res[i] = {
			flight_number: launch.flight_number,
			mission_name: launch.mission_name,
			payloads: launch.rocket.second_stage.payloads,
			image: launch.links.mission_patch_small,
			launch_date: DateFromUTC(launch.launch_date_utc),
		}
	})
	return res
}
