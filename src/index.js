import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Router from './config/router'

ReactDOM.render(<Router/>, document.getElementById('root'))

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
