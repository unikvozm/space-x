import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducers } from 'Src/reducers'
import { sagas } from 'Src/sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)

const isDevMode = process.env.NODE_ENV === 'development'

const composeEnhancer =
	(isDevMode && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducers, {}, composeEnhancer(middleware))

sagaMiddleware.run(sagas)
