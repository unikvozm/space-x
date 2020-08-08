import * as React from 'react'
import { Container } from 'Src/lib/components/Decorators/Container.decorator'
import { historyActions } from '../actions'
import { historySelector } from '../selectors/history.selectors'
import { IHistory } from '../models/History.model'
import { HistoryTable } from '../components/HistoryTable.component'

interface ComponentProps {
	getHistory: () => void
	history: IHistory[]
}
@Container({
	actions: {
		getHistory: historyActions.getHistory,
	},
	selectors: {
		history: historySelector.getHistory,
	},
})
export class HistoryContainer extends React.PureComponent<ComponentProps> {
	public componentDidMount() {
		const { getHistory, history } = this.props
		if (!history.length) getHistory()
	}

	public render() {
		const { history } = this.props
		return (
			<main>
				<h1>SpeceX History</h1>
				{history.length ? <HistoryTable data={history} /> : <p>There is no data</p>}
			</main>
		)
	}
}
