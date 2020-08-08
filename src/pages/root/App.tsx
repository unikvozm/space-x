import * as React from 'react'
import './styles/App.scss'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { FrontUrls } from 'Src/constants/FrontUrls'
import { HomeContainer } from 'Pages/home/containers/Home.container'
import { HistoryContainer } from 'Pages/history/containers/History.container'
import { LaunchesContainer } from 'Pages/launches/containers/Launches.container'
import { NoFoundContainer } from '../noFound/containers/NoFound.container'
import { Header } from './components/Header/Header.component'

export class App extends React.PureComponent {
	public render(): JSX.Element {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path={FrontUrls.home} exact component={HomeContainer} />
					<Route path={FrontUrls.history} component={HistoryContainer} />
					<Route path={FrontUrls.launches} component={LaunchesContainer} />
					<Route component={NoFoundContainer} />
				</Switch>
			</BrowserRouter>
		)
	}
}
