import * as React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
// import { IStore } from 'Src/store/IStore.interface'
import { App } from './App'

interface ComponentProps {
	store: Store<any>
}

export const RootContainer: React.FC<ComponentProps> = ({ store }: ComponentProps): JSX.Element => (
	<Provider store={store}>
		<App />
	</Provider>
)
