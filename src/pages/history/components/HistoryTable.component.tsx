import * as React from 'react'
import { DateFromUTC } from 'Src/utils/date'
import { IHistory } from '../models/History.model'
import '../styles/HistoryTable.scss'

interface ComponentProps {
	data: IHistory[]
}

export const HistoryTable: React.FC<ComponentProps> = ({ data }: ComponentProps): JSX.Element => (
	<table className="history-table">
		<thead>
			<tr>
				<th>Date</th>
				<th>Description</th>
				<th>Links</th>
			</tr>
		</thead>
		<tbody>
			{data.map((event: IHistory) => (
				<tr key={event?.id}>
					<td>{event?.event_date_utc && DateFromUTC(event.event_date_utc)}</td>
					<td>{event?.details}</td>
					<td>
						<ul>
							{event?.links?.article && (
								<li>
									<a href={event.links.article} target="_blank" rel="noreferrer">
										Article
									</a>
								</li>
							)}
							{event?.links?.reddit && (
								<li>
									<a href={event.links.reddit} target="_blank" rel="noreferrer">
										Reddit
									</a>
								</li>
							)}
							{event?.links?.wikipedia && (
								<li>
									<a href={event.links.wikipedia} target="_blank" rel="noreferrer">
										Wikipedia
									</a>
								</li>
							)}
						</ul>
					</td>
				</tr>
			))}
		</tbody>
	</table>
)
