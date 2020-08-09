import { IFetchedLaunch, ILaunch } from 'Src/pages/launches/models/Launch.model'
import { IFetchedRocket, IOrbit } from 'Src/pages/launches/models/Rocket.model'
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
			launch_date_unix: launch.launch_date_unix,
			rocket_id: launch.rocket.rocket_id,
		}
	})
	return res
}

export const convertFetchedRocketToIOrbit = (rockets: IFetchedRocket[]): IOrbit[] => {
	const res: Map<string, IOrbit> = new Map()
	const orbits: Map<string, string[]> = new Map()
	rockets.forEach((rocket: IFetchedRocket) => {
		rocket.payload_weights.forEach((payload) => {
			res.set(payload.id, payload)
			orbits.set(payload.id, [...(orbits.get(payload.id) || []), rocket.rocket_id])
		})
	})
	return Array.from(res.values()).map((orbit) => ({
		...orbit,
		rockets: Array.from(new Set(orbits.get(orbit.id))),
	}))
}
