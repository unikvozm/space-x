import * as React from 'react'
import { ILaunch } from '../models/Launch.model'

interface ComponentProps {
	data: ILaunch[]
	onClick: (id: number) => void
}

export const LaunchesCards: React.FC<ComponentProps> = ({
	data,
	onClick,
}: ComponentProps): JSX.Element => (
	<div className="card-container">
		{data.map((launch: ILaunch) => (
			<div
				className="card"
				key={launch.flight_number}
				onClick={() => onClick(launch.flight_number)}
			>
				<img src={launch.image} alt="" />
				<p>{launch.mission_name}</p>
				<p>{launch.launch_date}</p>
				<p>Rocket: {launch.rocket_name}</p>
				<p>Payloads:</p>
				{launch.payloads.map((payload) => (
					<ul key={payload.payload_id}>
						<li>{payload.payload_id}</li>
						<li>{`Manufacturer: ${payload.manufacturer || ''}`}</li>
						<li>{`Nationality: ${payload.nationality || ''}`}</li>
					</ul>
				))}
			</div>
		))}
	</div>
)
