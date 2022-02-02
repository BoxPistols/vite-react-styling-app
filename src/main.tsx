import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import './index.css'
// import App from './App'

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Hello name='xxx' />
    </React.StrictMode>,
    document.getElementById('root')
)
