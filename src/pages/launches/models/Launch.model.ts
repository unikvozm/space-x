export type ILaunch = {
	flight_number: number
	mission_name: string
	launch_date: string
	launch_date_unix: number
	payloads: [
		{
			payload_id: string
			nationality: string
			manufacturer: string
		}
	]
	image: string
}

export type IFetchedLaunch = {
	flight_number: number
	mission_name: string
	// mission_id: number[]
	// upcoming: boolean
	// launch_year: string
	launch_date_unix: number
	launch_date_utc: string
	// launch_date_local: string
	// is_tentative: boolean
	// tentative_max_precision: string
	// tbd: boolean
	// launch_window: number
	rocket: {
		rocket_id: string
		rocket_name: string
		rocket_type: string
		// first_stage: {
		// 	cores: [
		// 		{
		// 			core_serial: string
		// 			flight: number
		// 			block: null
		// 			gridfins: boolean
		// 			legs: boolean
		// 			reused: boolean
		// 			land_success: null
		// 			landing_intent: boolean
		// 			landing_type: null
		// 			landing_vehicle: null
		// 		}
		// 	]
		// }
		second_stage: {
			// block: 1
			payloads: [
				{
					payload_id: string
					// norad_id: []
					// reused: boolean
					// customers: ['DARPA']
					nationality: string
					manufacturer: string
					payload_type: string
					payload_mass_kg: number
					payload_mass_lbs: number
					orbit: string
					// orbit_params: {
					// 	reference_system: 'geocentric'
					// 	regime: 'low-earth'
					// 	longitude: null
					// 	semi_major_axis_km: null
					// 	eccentricity: null
					// 	periapsis_km: 400
					// 	apoapsis_km: 500
					// 	inclination_deg: 39
					// 	period_min: null
					// 	lifespan_years: null
					// 	epoch: null
					// 	mean_motion: null
					// 	raan: null
					// 	arg_of_pericenter: null
					// 	mean_anomaly: null
					// }
				}
			]
		}
		// fairings: { reused: boolean; recovery_attempt: boolean; recovered: boolean; ship: null }
	}
	// ships: []
	// telemetry: { flight_club: null }
	// launch_site: {
	// 	site_id: 'kwajalein_atoll'
	// 	site_name: 'Kwajalein Atoll'
	// 	site_name_long: 'Kwajalein Atoll Omelek Island'
	// }
	// launch_success: boolean
	// launch_failure_details: { time: 33; altitude: null; reason: 'merlin engine failure' }
	links: {
		mission_patch: string
		mission_patch_small: string
		reddit_campaign?: string
		reddit_launch?: string
		reddit_recovery?: string
		reddit_media?: string
		presskit?: string
		article_link: string
		wikipedia: string
		video_link: string
		youtube_id: string
		flickr_images: string[]
	}
	// details: 'Engine failure at 33 seconds and loss of vehicle'
	// static_fire_date_utc: '2006-03-17T00:00:00.000Z'
	// static_fire_date_unix: 1142553600
	// timeline: { webcast_liftoff: 54 }
	// crew: null
}
