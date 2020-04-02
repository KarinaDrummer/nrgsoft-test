import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Root from './components/Root'

render(<Root />, document.getElementById('root'))

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
