import React from 'react'
import ReactDOM from 'react-dom'
import { RootContainer } from 'Pages/root/containers/Root.container'
import { store } from 'Src/store'

ReactDOM.render(<RootContainer store={store} />, document.getElementById('root'))
